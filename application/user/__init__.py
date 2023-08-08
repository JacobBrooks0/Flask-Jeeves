""" This file can be empty or contain minimal content. 
Its purpose is to make the directory a Python package, allowing you to organize your code 
and easily import modules from this directory. """

#if you chose to leave it empty, python will recognise it
#as a package marker 
""" 
#Where we will have ALL our routes 
from application import db
from flask import request, Blueprint

#Blueprint obj creation
main = Blueprint("main", __name__)
print(__name__)

#homepage
@main.route("/")
def index():
    return "<p>Hello, World!</p>" """