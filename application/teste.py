from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

@app.route('/')
def hello():
    return {"hello": "world"}


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://shcnxtvf:wrnhv3gUs8h3ARKeFWvghUG8gwcGbXxK@trumpet.db.elephantsql.com/shcnxtvf"
db = SQLAlchemy(app)
migrate = Migrate(app, db)

class CarsModel(db.Model):
    __tablename__ = 'cars'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    model = db.Column(db.String())
    doors = db.Column(db.Integer())

    def __init__(self, name, model, doors):
        self.name = name
        self.model = model
        self.doors = doors

    def __repr__(self):
        return f"<Car {self.name}>"

if __name__ == '__main__':
    app.run(debug=True)
