from flask import Flask, render_template, redirect, request, session
import random
import datetime
import time

app = Flask(__name__)
app.secret_key = "ABCDEFG"

@app.route("/")
def index():
    # Initialize
    if "currentgold" not in session.keys():
        session["currentgold"] = 0
        session["activity_log"] = ""
    return render_template(
                                    "index.html",
                                    currentgold = session["currentgold"],
                                    activity_log = session["activity_log"]
                                )

@app.route("/process_money", methods=["POST"])
def process():
    # HTTP request timestamp
    current_time = datetime.datetime.fromtimestamp(time.time()).strftime("%Y-%m-%d %I:%M:%S %p")
    
    # Case 0 : Farm submit button click
    if request.form["space"] == "0":
        session["golddelta"] = random.randint(10,20)
        session["currentgold"] += session["golddelta"]
        session["activity_log"] += "Earned " + str(session["golddelta"]) + " golds from the farm! (" + str(current_time) + ")\n"
        
    # Case 1 : Cave submit button click
    elif request.form["space"] == "1":
        session["golddelta"] = random.randint(5,10)
        session["currentgold"] += session["golddelta"]
        session["activity_log"] += "Earned " + str(session["golddelta"]) + " golds from the cave! (" + str(current_time) + ")\n"

    # Case 2 : House submit button click
    elif request.form["space"] == "2":
        session["golddelta"] = random.randint(2,5)
        session["currentgold"] += session["golddelta"]
        session["activity_log"] += "Earned " + str(session["golddelta"]) + " golds from the House! (" + str(current_time) + ")\n"
    
    # Case 3 : Casino submit button click
    else:
        session["golddelta"] = 50 - random.randint(0,100)

        # Casino case 1 : earn gold
        if session["golddelta"] >= 0:
            session["activity_log"] += "Entered a casino and won " + str(session["golddelta"]) + " golds ... Yay!!! (" + str(current_time) + ")\n"
        
        # Casino case 2 : loss gold
        else:

            # Casino lost gold case 1 : if my gold current gold is bigger than lost amount,
            #                           (current gold) - (lost amount)
            if session["currentgold"] + session["golddelta"] < 0:
                session["activity_log"] += "Entered a casino and lost " + str(session["currentgold"]) + " golds ... Ouch!!! (" + str(current_time) + ")\n"
            
            # Casino lost gold case 2 : if my gold current gold is less than lost amount,
            #                           (current gold) - (lost amount) < 0 : doent make sense
            #                           therefore, set (lost amount) = (current amount)
            #                           and then (current amount) = 0
            else:
                session["activity_log"] += "Entered a casino and lost " + str(session["golddelta"]) + " golds ... Ouch!!! (" + str(current_time) + ")\n"

        session["currentgold"] += session["golddelta"]
        if session["currentgold"] < 0:
            session["currentgold"] = 0

    return redirect("/")

# Session reset functionality added
@app.route("/reset", methods=["POST", "GET"])
def reset():
    session.clear()
    return redirect("/")

app.run(debug = True)
