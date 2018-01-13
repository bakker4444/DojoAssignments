from flask import Flask, render_template, session, redirect

app = Flask(__name__)
app.secret_key = "ABCDEFG"

@app.route("/")
def index():
    if "number" in session.keys():
        session["number"] += 1
    else:
        session["number"] = 1
    print session["number"]
    return render_template("index.html", number = session["number"])

@app.route("/clear", methods=["POST"])
def clear():
    session.clear()
    return redirect("/")

@app.route("/addtwo", methods=["POST"])
def add_two():
    session["number"] += 1
    return redirect("/")

app.run(debug = True)
