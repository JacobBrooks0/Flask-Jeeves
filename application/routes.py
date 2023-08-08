#Where we’ll have ALL our routes 
from application import db
from flask import request, Blueprint

#Blueprint obj creation
main = Blueprint("main", __name__)
print(__name__)

#homepage
@main.route("/")
def index():
    return "<p>Hello, World!</p>"