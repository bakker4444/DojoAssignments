from flask import Flask, render_template, redirect, request, redirect
from mysqlconnection import MySQLConnector
import datetime

app = Flask(__name__)

mysql = MySQLConnector(app, "full_friends")

@app.route("/")
def index():
    friends = mysql.query_db("SELECT * FROM friends")
    # print friends
    return render_template("index.html", friends = friends )

@app.route("/addfriend", methods = ["POST"])
def adduser():
    first_name = request.form["fullname"].split()[0]
    if len(request.form["fullname"].split()) > 1:
        last_name = request.form["fullname"].split()[-1]
    else:
        last_name = " "
    age = request.form["age"]

    data = { "first_name":first_name, "last_name":last_name, "age":age, "date":datetime.datetime.now()}

    mysql.query_db("INSERT INTO friends (first_name, last_name, age, friend_since) VALUES ( :first_name, :last_name, :age, :date )", data)

    return redirect("/")

app.run(debug = True)
