from flask import Flask, request, session, jsonify
from flask_socketio import SocketIO, emit
from flask_cors import CORS

app = Flask(__name__)
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


@socketio.on("data")
def handle_message(data):
    print("Data from the front end: ", str(data))
    emit("data", {"data": data, "id": request.sid}, broadcast=True)


if __name__ == "__main__":
    socketio.run(app, debug=True, port=5001)
