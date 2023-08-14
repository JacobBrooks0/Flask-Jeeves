import os
import sys
from pathlib import Path
full_path = os.path.dirname(os.path.abspath(__file__))
sys.path.append(str(Path(full_path).parents[0]))
 
from application import *
from flask import request, jsonify, render_template, redirect, session
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from application.models import *

engine = create_engine(DATABASE_URL)
dBSession = sessionmaker(bind=engine)
dBsession = dBSession()

@app.route("/")
def index():
    return {"hello": "world"}

@app.route("/question", methods=["GET"])
def get_question(id=1):
    #receber id do kernel
    print("ROUTES", id)
    if 'current_question_num' not in session:
        session['current_question_num'] = 1
        print(session['current_question_num'], "<<<<<<<<<<<<")
    
    question_num = session['current_question_num']
    question = (dBsession.query(Variables).filter_by(id=id).all())[0].as_dict() 

    if question:
        return jsonify(question['question']), 200
    else:
        return jsonify({"id": -1, "text": "No more questions"})
     

@app.route("/answer", methods=["POST"])
def get_answer():
    #receber answer do front end
    answer = request.json['answer']
    answerValue = None

    if answer == 1:
        answerValue = 0.0
    elif answer == 2:
        answerValue = 0.25
    elif answer == 3:
        answerValue = 0.5
    elif answer == 4:
        answerValue = 0.75
    elif answer == 5:
        answerValue = 1
