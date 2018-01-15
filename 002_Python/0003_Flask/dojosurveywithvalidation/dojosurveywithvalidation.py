from flask import Flask, render_template, redirect, request, session, flash
import re

app = Flask(__name__)
app.secret_key = "ABCDEFG"

@app.route("/", methods = ["GET", "POST"])
def index():
    return render_template("index.html")

@app.route("/validate", methods = ["POST"])
def validation():

    session["fullname"] = request.form["name"]
    session["location"] = request.form["location"]
    session["fav_language"] = request.form["favorite_language"]
    session["comment"] = request.form["comment"]

    # Name validation part
    # Name should be at least one character and more
    # Also Name should be Full Name with space between
    if len(request.form["name"]) < 1:
        flash("Please enter your name, not leaving blank")
        return redirect("/")
    elif not re.compile(r'^[a-zA-Z]+[\s][a-zA-Z.]*[\s]?[a-zA-Z]+$').match(request.form["name"]):
        flash("Invalid name, type first, and middle (optional), and last name with space between")
        return redirect("/")

    # Comment validation
    # Comment is required, and no more than 120 characters.
    elif len(request.form["comment"]) < 1:
        flash("Please enter your comment")
        return redirect("/")
    elif len(request.form["comment"]) > 120:
        flash("Please reduce your comment no longer than 120 characters")
        return redirect("/")

    # if form is Valid, then redirect submitinfo.html page
    else:
#        flash("Valid Name and Comment")
        return redirect("/result")

@app.route("/result", methods = ["GET"])
def showinfo():
    return render_template(
                                "submitinfo.html",
                                name = session["fullname"],
                                location = session["location"],
                                fav_language = session["fav_language"],
                                comment = session["comment"]
                        )

app.run(debug = True)


