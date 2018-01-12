from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", flag = 0)

@app.route("/ninja")
def ninjatotal():
    return render_template("index.html", flag = 1)

@app.route("/ninja/<ninjacolor>")
def ninjaeach(ninjacolor):
    if ninjacolor == "blue":
        flag = 2
    elif ninjacolor == "orange":
        flag = 3
    elif ninjacolor == "red":
        flag = 4
    elif ninjacolor == "purple":
        flag = 5
    else:
        flag = 6
    return render_template("index.html", flag=flag)

app.run(debug = True)

