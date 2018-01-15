# Assignment: Registration Form
#
# Create a simple registration page with the following fields:
#
#     email
#     first_name
#     last_name
#     password
#     confirm_password
#
# Here are the validations you must include:
#
#     All fields are required and must not be blank
#     First and Last Name cannot contain any numbers
#     Password should be more than 8 characters
#     Email should be a valid email
#     Password and Password Confirmation should match
#     When the form is submitted, make sure the user submits appropriate information.
#         If the user did not submit appropriate information, return the error(s) above
#         the form that asks the user to correct the information. 
#
# Message Flashing with Categories
# For this, you will need to use flash messages at the very least. You may have to take this
# one step further and add categories to the flash messages. You can learn that from the flask doc:
# flash messages with categories
#
# If the form with all the information is submitted properly, simply have it say a message
#  "Thanks for submitting your information."
#
#
# Ninja Version:
# Add the validation that requires a password to have at least 1 uppercase letter and 1 numeric value.
#
#
# Hacker Version:
# Add a birth-date field that must be validated as a valid date and must be from the past.

from flask import Flask, render_template, redirect, request, flash
import re
import time

app = Flask(__name__)
app.secret_key = "ABCDEF"

@app.route("/", methods = ["GET", "POST"])
def index():
    return render_template("index.html")

@app.route("/validation", methods = ["POST"])
def valitaion_check():

    # if there is empty slot in the form
    # raise the error message
    if len(request.form["firstname"]) < 1 or len(request.form["lastname"]) < 1 or len(request.form["email"]) < 1 or len(request.form["password"]) < 1 or len(request.form["passwordconfirm"]) < 1:
        if len(request.form["firstname"]) < 1:
            flash("Please enter your firse name", "firstname_error")
        if len(request.form["lastname"]) < 1:
            flash("Please enter your last name", "lastname_error")
        if len(request.form["email"]) < 1:
            flash("Please enter your email", "email_error")
        if len(request.form["password"]) < 1:
            flash("Please enter your password", "password_error")
        if len(request.form["passwordconfirm"]) < 1:
            flash("Please enter your confirmation password", "confirm_error")
        return redirect("/")

    # check the first and last name with number
    elif re.search(r'[0-9]+', request.form["firstname"]) or re.search(r'[0-9]+', request.form["lastname"]):
        if re.search(r'[0-9]+', request.form["firstname"]):
            flash("Please enter valid first name (without number)", "firstname_error")
        if re.search(r'[0-9]+', request.form["lastname"]):
            flash("Please enter valid last name (without number)", "lastname_error")
        return redirect("/")
    
    # check the birth date is valid
    # getting current date --> time.strftime("%Y%m%d")
    elif int("".join(str(request.form["birthdate"]).split("-"))) > int(time.strftime("%Y%m%d")):
        flash("Invalid birthdate. Please enter the valid birthdate (not future)", "birthdate_error")
        return redirect("/")

    # check the email is valid
    elif not re.compile(r'^[a-zA-Z0-9.+_-]+[@]+[a-zA-Z0-9._-]+[.]+[a-zA-Z]+$').match(request.form["email"]):
        flash("Please enter the valid email", "email_error")
        return redirect("/")

    # check the password and confirmation password length
    elif len(request.form["password"]) < 9 or len(request.form["passwordconfirm"]) < 9:
        if len(request.form["password"]) < 9:
            flash("Please enter valid password (more than 8 characters)", "password_error")
        if len(request.form["passwordconfirm"]) < 9:
            flash("Please enter valid confirmation password (more than 8 characters)", "confirm_error")
        return redirect("/")

    elif re.search(r'[A-Z]+', request.form["password"]) == None or re.search(r'[0-9]+', request.form["password"]) == None:
        if re.search(r'[A-Z]+', request.form["password"]) == None and re.search(r'[0-9]+', request.form["password"]) == None:
            flash("Please enter valid password with at least one upper character or more AND at least one numeric value or more (missing Upper case letter(s) AND numeric value(s))", "password_error")
        elif re.search(r'[A-Z]+', request.form["password"]) == None:
            flash("Please enter valid password with at least one upper character or more AND at least one numeric value or more (missing Upper case letter(s))", "password_error")
        else:
            flash("Please enter valid password with at least one upper character or more AND at least one numeric value or more (missing numeric value(s))", "password_error")
        return redirect("/")
    
    # check the password and confirmation password are the same
    elif request.form["password"] != request.form["passwordconfirm"]:
        flash("Please match your password and confirmation password", "password_error")
        return redirect("/")
    
    # if all of form is valid, redirect success pages
    else:
        return redirect("/success")

@app.route("/success")
def success():
    return render_template("success.html")

app.run(debug = True)
