from flask import Flask
from application import main


app = Flask(__name__)

# Register the main blueprint
app.register_blueprint(main)

if __name__ == '__name__':
    app.run(debug=True)