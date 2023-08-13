import os
import sys
from pathlib import Path
full_path = os.path.dirname(os.path.abspath(__file__))
sys.path.append(str(Path(full_path).parents[0]))
 
from application import *
from flask import request, jsonify, render_template, redirect
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from application.models import *

engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
session = Session()

# def format_question(variable):
#     return {
#         "question": variable.question,
        
#     }


@app.route("/")
def index():
    return {"hello": "world"}


@app.route("/question", methods=["GET"])
def get_question(id):
     question = (session.query(Variables).filter_by(id=id).all())[0].as_dict()     
     return jsonify(question['question']), 200
       
       
