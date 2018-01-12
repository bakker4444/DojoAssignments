from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    return render_template("index.html")

@app.route("/result", methods=["GET", "POST"])
def result():
    if request.method == "POST":
        return render_template(
                                    "submitinfo.html",
                                    name = request.form["name"],
                                    location = request.form["location"],
                                    fav_language = request.form["favorite_language"],
                                    comment = request.form["comment"]
                                )
    else:
        return render_template(
                                    "submitinfo.html",
                                    name = request.args.get("name"),
                                    location = request.args.get("location"),
                                    fav_language = request.args.get("favorite_language"),
                                    comment = request.form("comment")
                                )

app.run(debug = True)

