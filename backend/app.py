from flask import Flask, render_template, request, url_for, redirect, jsonify
from bson import json_util
from pymongo import MongoClient
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
client = MongoClient('localhost',27017)

db = client.flask_db
decks = db.decks
# def init_db():
#     db = 
def parse_json(data):
    return json.loads(json_util.dumps(data))

@app.route('/')
def index():
    return "<p> Heya </p>"
    
@app.route('/getDecks/<type>')
def getDecks(type=0):
    a = ""
    if str(type) == "0":
        a = 'Classic'
    elif str(type) == "1":
        a = 'Custom'
    elif str(type) == "2":
        a = 'Workshop'
    return jsonify(parse_json(decks.find({"type": a})))

@app.route('/makeDeck', methods=('GET','POST') )
def makeDeck():
    if request.method=='POST':
        name = request.form['name']
        type = request.form['type']
        description = request.form['description']
        phrases = request.form['phrases']
        decks.insert_one({'name': name, 'type' : type,'description': description,'phrases': phrases})
        return redirect(url_for('makeDeck'))
    return render_template('index.html')