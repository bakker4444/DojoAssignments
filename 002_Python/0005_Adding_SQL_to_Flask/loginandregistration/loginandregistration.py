from flask import Flask, render_template, redirect, session, request, flash
from mysqlconnection import MySQLConnector
import md5
import re

app = Flask(__name__)
app.secret_key = "ABCDEFG"

mysql = MySQLConnector(app, "loginandregistration")

@app.route("/")
def index():
    # Case : logout status ( first time access or access right after reset the session )
    if "login_status" not in session.keys():
        session["login_status"] = False
        session["login_id"] = None
    return render_template("login.html")

@app.route("/loginprocess", methods=["POST"])
def loginvalidation():
    userid = request.form["userid"]
    #password = request.form["password"]
    query = "SELECT userid, password FROM users WHERE userid = '" + str(userid) + "'"
    result = mysql.query_db(query)

    if len(result) < 1:
        flash("User ID does not exist, please check your user id again", "userid_error")
        return redirect("/")
    if result[0]["password"] != md5.new(request.form["password"]).hexdigest():
    #if result[0]["password"] != request.form["password"]:
        flash("Please check your password again", "password_error")
        return redirect("/")
    else:
        session["login_status"] = True
        session["login_id"] = request.form["userid"]
        return redirect("/loginsuccess")

@app.route("/registration")
def registrationpage():
    return render_template("registration.html")

@app.route("/registrationprocess", methods=["POST"])
def registrationprocess():

    condition_01 = not re.compile(r'^[a-zA-Z]+[a-zA-Z]+$').match(request.form["firstname"])
    condition_02 = not re.compile(r'^[a-zA-Z]+[a-zA-Z]+$').match(request.form["lastname"])
    condition_03 = not re.compile(r'[a-zA-Z0-9+-_.]+@[a-zA-Z0-9+-_]+.[a-zA-Z0-9]+').match(request.form["email"])
    condition_04 = len(request.form["password"]) < 8
    condition_05 = len(request.form["confirmation_password"]) < 8
    condition_06 = (request.form["password"] != request.form["confirmation_password"])

    # Case : data is not valid
    if condition_01 or condition_02 or condition_03 or condition_04 or condition_05 or condition_06:

        # check first name length, should be at least 2 characters, and letters only
        if condition_01:
            flash("Please check your first name, should be at least 2 characters or more", "first_name_error")

        # check last name length, should be at least 2 characters, and letters only
        if condition_02:
            flash("Please check your last name, should be at least 2 characters or more", "last_name_error")

        # check email is valid format
        if condition_03:
            flash("Please enter valid email address, like 'abc123@FdgK3G.com'", "email_error")

        # check password is valid
        if condition_04:
            flash("Please enter your password at least 8 characters or more", "password_error")

        if condition_05:
            flash("Please enter your confirmation password at least 8 characters or more", "confirmation_password_error")
        elif condition_06:
            flash("Please enter same password and confirmation password", "confirmation_password_error")
        return redirect("/registration")

    # Case : data is valid format
    else:

        # Query for user id check
        query_retrieved_01 = "SELECT userid FROM users WHERE userid = :userid"
        data_retrieved_01 = { "userid" : request.form["userid"] }
        result_prescreen_01 = mysql.query_db(query_retrieved_01, data_retrieved_01)

        # Query for email check
        query_retrieved_02 = "SELECT email FROM users WHERE email = :email"
        data_retrieved_02 = { "email": request.form["email"] }
        result_prescreen_02 = mysql.query_db(query_retrieved_02, data_retrieved_02)

        # Case : same userid exists in database
        if len(result_prescreen_01) > 0:
            flash("Same User ID exists, please enter different user id", "userid_error")
            return redirect("/registration")

        # Case : same email exists in database
        elif len(result_prescreen_02) > 0:
            flash("Same Email exists, please enter different email", "email_error")
            return redirect("/registration")

        # Case : registration success case
        else:
            # hashing the password and confirmation password
            password_hashed = md5.new(request.form["password"]).hexdigest()
            confirmation_password = md5.new(request.form["confirmation_password"]).hexdigest()
            query = "INSERT INTO users (userid, first_name, last_name, email, password, created_at, updated_at) VALUES (:userid, :first_name, :last_name, :email, :password, Now(), Now())"
            data = {
                    "userid" : request.form["userid"],
                    "first_name" : request.form["firstname"],
                    "last_name" : request.form["lastname"],
                    "email" : request.form["email"],
                    "password" : password_hashed
                    }
            mysql.query_db(query, data)
            return redirect("/registrationsuccess")

@app.route("/loginsuccess")
def loginsuccesspage():
    return render_template("loginsuccess.html")

@app.route("/registrationsuccess")
def registrationsuccesspage():
    return render_template("registrationsuccess.html")

@app.route("/reset")
def reset():
    session.clear()
    return redirect("/")

app.run(debug = True)

