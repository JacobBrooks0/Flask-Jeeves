from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os #inbuilt python module
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

    return app
