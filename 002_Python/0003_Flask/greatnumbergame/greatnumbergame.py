from flask import Flask, render_template, session, redirect, request
import random

app = Flask(__name__)
app.secret_key = "ABCDEF"

@app.route("/", methods=["POST", "GET"])
def index():
    if "compNumber" not in session.keys():
        return redirect("/initialize")
    else:
        if session["resetRandomNumber"] == True:
            return redirect("/reset")
        else:
            return render_template(
                                        "index.html",
                                        compNumber = session["compNumber"],
                                        togglelow = session["togglelow"],
                                        togglehigh = session["togglehigh"],
                                        togglecorrect = session["togglecorrect"],
                                        toggleform = session["toggleform"]
                                    )

@app.route("/initialize")
def initialize():
    session["compNumber"] = random.randint(1,100)
    session["resetRandomNumber"] = False
    session["togglelow"] = "hidecontents"
    session["togglehigh"] = "hidecontents"
    session["togglecorrect"] = "hidecontents"
    session["toggleform"] = "showcontents"
    return redirect("/")

@app.route("/process", methods=["POST"])
def process():
    if int(session["compNumber"]) == int(request.form["guessNumber"]):
        session["togglelow"] = "hidecontents"
        session["togglehigh"] = "hidecontents"
        session["togglecorrect"] = "showcontents"
        session["toggleform"] = "hidecontents"
    elif int(session["compNumber"]) > int(request.form["guessNumber"]):
        session["togglelow"] = "showcontents"
        session["togglehigh"] = "hidecontents"
        session["togglecorrect"] = "hidecontents"
        session["toggleform"] = "showcontents"
    else:   # session["compNumber"] < request.data["guessNumber"]:
        session["togglelow"] = "hidecontents"
        session["togglehigh"] = "showcontents"
        session["togglecorrect"] = "hidecontents"
        session["toggleform"] = "showcontents"
    return redirect("/")

@app.route("/playagain", methods=["POST"])
def reset_raise():
    session["resetRandomNumber"] = True
    return redirect("/")

@app.route("/reset")
def resetSession():
    session.clear()
    return redirect("/")

app.run(debug = True)

