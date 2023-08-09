from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os #imbuilt python module
from dotenv import load_dotenv


#load env virables.
load_dotenv()

""" application factory 
function to call with diff setting (dev or testing environment)
run different version of the app (multiple instances with different config)
setup app factory """

#create an instance of the db
db = SQLAlchemy()

def create_app(env=None):
    #initialise the app
    app = Flask(__name__)

    #config setup for different environment 
    if env == 'TEST':
        app.config["TESTING"] = True
        app.config["DEBUG"] = False
        app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite://"
        app.config["SECRET_KEY"] = "test"
    else: #development
        app.config["TESTING"] = False
        app.config["DEBUG"] = False
        app.config['SQLALCHEMY_DATABASE_URI'] = os.environ["DATABASE_URL"]
        app.config["SECRET_KEY"] = os.environ["SECRET_KEY"]

#initialising the db and connecting to app
    db.init_app(app)
    app.app_context().push()
    CORS(app)

    #BLUEPRINTS
    from application.homepage.routes import homepage
    from application.user.routes import user
    #Blueprints registration
    app.register_blueprint(user)
    app.register_blueprint(homepage)

    socketio = SocketIO(app)

    rooms = {}

    def generate_unique_code(length):
        while True:
            code = ""
            for _ in range(length):
                code += random.choice(ascii_uppercase)
            if code not in rooms:
                break
        return code

    @app.route("/chat", methods=["POST", "GET"])
    def home():
        session.clear()
        if request.method == "POST":
            name = request.form.get("name")
            code = request.form.get("code")
            join = request.form.get("join", False)
            create = request.form.get("create", False)

            if not name:
                return render_template("home.html", error="Please enter a name.", code=code, name=name)

            if join != False and not code:
                return render_template("home.html", error="Please enter a room code.", code=code, name=name)

            room = code
            if create != False:
                room = generate_unique_code(4)
                rooms[room] = {"members": 0, "messages": []}
            elif code not in rooms:
                return render_template("home.html", error="Room does not exist.", code=code, name=name)
            elif rooms[room]["members"] >=2:
                return render_template("home.html", error="This room is full.", code=code, name=name)

            session["room"] = room
            session["name"] = name
            return redirect(url_for("room"))

        return render_template("home.html")

    @app.route("/chat/room")
    def room():
        room = session.get("room")
        if room is None or session.get("name") is None or room not in rooms:
            return redirect(url_for("home"))

        return render_template("room.html", code=room)

    @socketio.on("message")
    def message(data):
        room = session.get("room")
        if room not in rooms:
            return

        content = {
        "name": session.get("name"),
        "message": data["data"]
        }
        send(content, to=room)
        rooms[room]["messages"].append(content)
        print(f"{session.get('name')} said: {data['data']}")


    @socketio.on("connect")
    def connect(auth):
        room = session.get("room")
        name = session.get("name")
        if not room or not name:
            return
        if room not in rooms:
            leave_room(room)
            return

        join_room(room)
        send({"name": name, "message": "has entered the room"}, to=room)
        rooms[room]["members"] += 1
        print(f"{name} joined room {room}")

    @socketio.on("disconnect")
    def disconnect():
        room = session.get("room")
        name = session.get("name")
        leave_room(room)

        if room in rooms:
            rooms[room]["members"] -=1
            if rooms[room]["members"] <=0:
                del rooms[room]

        send({"name": name, "message": "has left the room"}, to=room)
        print(f"{name} has left the room {room}")

    return app

if __name__ == '__main__':
    app = create_app()
    socketio = SocketIO(app)
    socketio.run(app, debug=True)