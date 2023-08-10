# Flask-Jeeves

from application import db
from application import create_app
app=create_app()
db.create_all()
