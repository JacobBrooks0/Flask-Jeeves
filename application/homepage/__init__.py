#import and register blueprint here:
from flask import Blueprint

# Create a Blueprint instance for the homepage module
homepage_route = Blueprint('homepage', __name__)

# Import the routes module to register the routes
from . import routes

# Register the blueprint
def register_blueprint(app):
    app.register_blueprint(homepage_route)

# Call the register_blueprint function to register the blueprint
from . import routes  # Import routes to ensure they are registered