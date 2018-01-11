from flask import Flask, render_template

def run_render_temp(sitename):
    return render_template(sitename)

app = Flask(__name__)

@app.route("/")
def run_index():
    return render_template("index.html")

@app.route("/projects")
def run_projects():
    return render_template("projects.html")

@app.route("/about")
def run_about():
    return render_template("about.html")

app.run(debug = True)

