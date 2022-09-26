from flask import Flask, render_template, request, url_for, redirect, jsonify
from bson import json_util
from pymongo import MongoClient
import json

app = Flask(__name__)
client = MongoClient('localhost',27017)

db = client.flask_db
decks = db.decks
# def init_db():
#     db = 
def parse_json(data):
    return json.loads(json_util.dumps(data))
    
@app.route('/getDecks')
def getDecks():
    x = parse_json(decks.find())
    return jsonify(x)

@app.route('/makeDeck', methods=('GET','POST') )
def makeDeck():
    if request.method=='POST':
        name = request.form['name']
        description = request.form['description']
        phrases = request.form['phrases']
        decks.insert_one({'name': name, 'description': description,'phrases': phrases})
        return redirect(url_for('makeDeck'))
    return render_template('index.html')

# @app.route("/")
# def hello_world():
#     return "<p>Hello, World!</p>"