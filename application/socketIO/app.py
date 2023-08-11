
from flask import Flask, request,jsonify
from flask_socketio import SocketIO,emit
from flask_cors import CORS


app = Flask(__name__)
<<<<<<< HEAD
app.config['SECRET_KEY'] = 'secret!'
CORS(app,resources={r"/*":{"origins":"*"}})
socketio = SocketIO(app,cors_allowed_origins="*")

@app.route("/http-call")
def http_call():
    """return JSON with string data as the value"""
    data = {'data':'This text was fetched using an HTTP call to server on render'}
    return jsonify(data)

@socketio.on("connect")
def connected():
    """event listener when client connects to the server"""
    print(request.sid)
    print("client has connected")
    emit("connect",{"data":f"id: {request.sid} is connected"})
=======
app.config["SECRET_KEY"] = "auhuiha"
CORS(app, resources={r"/*": {"origins": "*"}})
socketio = SocketIO(app, cors_allowed_origins="*")


@app.route("/http-call")
def http_call():
    data = {"data": "Fetched using http call"}
    return jsonify(data), 200


@socketio.on("connect")
def connected():
    print(request.sid)
    print("Client connected<<<<<<<<<")
    emit("connect", {"data": f"id:{request.sid} is connected"}, broadcast=True)


@socketio.on("disconnect")
def disconnected():
    print("User disconnected")
    emit("disconnect", f"user {request.sid} has been disconnected", broadcast=True)
>>>>>>> ea326f4e3bc2bee4ccc5716c61f13f66b48cbd30


@socketio.on("data")
def handle_message(data):
<<<<<<< HEAD
    """event listener when client types a message"""
    print("data from the front end: ",str(data))
    emit("data",{'data':data,'id':request.sid},broadcast=True)

@socketio.on("disconnect")
def disconnected():
    """event listener when client disconnects to the server"""
    print("user disconnected")
    emit("disconnect",f"user {request.sid} disconnected",broadcast=True)

=======
    print("Data from the front end: ", str(data))
    emit("data", {"data": data, "id": request.sid}, broadcast=True)


if __name__ == "__main__":
    socketio.run(app, debug=True, port=5001)
>>>>>>> ea326f4e3bc2bee4ccc5716c61f13f66b48cbd30
