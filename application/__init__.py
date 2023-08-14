import os
import sys
sys.path.append(str(os.path.dirname(os.path.abspath(__file__))))

from flask import Flask
from flask_session import Session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
DATABASE_URL = "postgresql://qbmdycoi:dvg0nKw0ZAZ5cvAZH7Z205BkJPhYpe4v@trumpet.db.elephantsql.com/qbmdycoi"
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
db = SQLAlchemy(app)
app.config['SESSION_PERMANENT'] = False
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)
migrate = Migrate(app, db)

import routes
