import os
import sys
sys.path.append(str(os.path.dirname(os.path.abspath(__file__))))

# import homepage
import diary
import user
import pets
import appointments


from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os #inbuilt python module
from dotenv import load_dotenv

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

    # from appointments.routes import appointment
    # from user.routes import user
    # from pets.routes import pet
    #Blueprints registration
    # app.register_blueprint (user)
    # app.register_blueprint (homepage.homepage)
    # app.register_blueprint (appointments)
    # app.register_blueprint (pets)

    return app

def recreate_tables():
    with app.app_context():
        db.drop_all()  # Drop existing tables
        db.create_all()  # Create new tables

if __name__ == '__main__':
    app = create_app()  # Create the app instance
    with app.app_context():
        recreate_tables()  # Drop and create the tables
