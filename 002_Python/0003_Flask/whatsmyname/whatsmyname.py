from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/process", methods=["GET", "POST"])
def process():
    if request.method == "POST":
        print request.form["name"]
        return redirect("/")
    else:
        print request.args.get("name")
        return redirect("/")

app.run(debug = True)

