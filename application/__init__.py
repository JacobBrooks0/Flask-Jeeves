from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os #imbuilt pyrhon module
from dotenv import load_dotenv

#load env virables.
load_dotenv()

# initialise the app
app = Flask(__name__)
CORS(app)
#app linked to db
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ["DATABASE_URL"]
#CSRF attack avoidance
app.config['SECRET_KEY'] = os.environ["SECRET_KEY"]
#initialise the db
db = SQLAlchemy(app)

from application import routes