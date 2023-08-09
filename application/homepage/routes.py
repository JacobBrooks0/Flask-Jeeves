from flask import Blueprint, render_template

homepage = Blueprint("homepage", __name__)

@homepage.route('/')
def index():
    return render_template('homepage/index.html')
# more homepage routes maybe?

# Import the blueprint in the __init__.py file of the 'homepage' folder
from . import routes