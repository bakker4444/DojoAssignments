from flask import Flask, render_template, request, redirect, flash, session
from mysqlconnection import MySQLConnector
import re, datetime

app = Flask(__name__)
app.secret_key = "ABCDEFG"

mysql = MySQLConnector(app, "emailvalidation")

@app.route("/")
def index():

    # first time site access or access the site right after the reset
    if not "invalidcheck" in session.keys():
        session["invalidcheck"] = False
        warningbox = "nodisplay"
    else:
        if session["invalidcheck"] == True:
            warningbox = "showdisplay"
        else:
            warningbox = "nodisplay"
    return render_template("index.html", warningbox = warningbox)

@app.route("/validate", methods = ["POST"])
def validation():

    # check if no input entered
    if (len(request.form["email"]) < 1):
        session["invalidcheck"] = True
        return redirect("/")

    # check if email pattern is valid
    elif not re.compile(r'^[a-zA-Z0-9+_-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z0-9-.]+$').match(request.form["email"]):
        session["invalidcheck"] = True
        return redirect("/")

    # run below if email is valid
    else:
        session["invalidcheck"] = False
        query = "INSERT INTO emails (email, created_at, updated_at) VALUE (:email, :created_at, :updated_at)"
        data = { "email": request.form["email"], "created_at": datetime.datetime.now(), "updated_at": datetime.datetime.now() }
        mysql.query_db(query, data)
        session["last_email"] = request.form["email"]
        return redirect("/success")

@app.route("/success")
def success():
    query = "SELECT * FROM emails"
    data = None
    result = mysql.query_db(query, data)
    return render_template("success.html", logs = result, last_email = session["last_email"])

@app.route("/reset")
def reset():
    session.clear()
    return redirect("/")

app.run(debug = True)