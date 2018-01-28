# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from models import User
import bcrypt
import re

# Create your views here.

def index(request):
    return render(request, "login_and_registration_app/index.html")

# Successful pange rendering route (if user successfully registered or logged in)
def successpage(request):
    
    # login status check
    if request.session["login_status_and_id"]["status"]:
        context = {
            "first_name" : User.objects.get(id=request.session["login_status_and_id"]["login_id"]).first_name,
            "last_name" : User.objects.get(id=request.session["login_status_and_id"]["login_id"]).last_name,
        }
        return render(request, "login_and_registration_app/successpage.html", context)
    
    # redirect with error message if user does not logged in
    else:
        messages.error(request, "Login error", extra_tags = "login_error")
        redirect("/")

# Registration verification process route
def registrationprocess(request):

    # Post request form validation check
    errors = User.objects.custom_registration_validator(request.POST)

    # Case : post request form error --> redirect registration / login page with error messages
    if len(errors):
        for key, value in errors.iteritems():
            messages.error(request, value, extra_tags = key)
        return redirect("/")

    # Case : email is already exists --> redirect registration / login page with error messages
    elif len(User.objects.filter(email=request.POST["email"])) > 0:
        errors["duplicated_email_error"] = "Email is already existed"
        messages.error(request, errors["duplicated_email_error"], extra_tags = "duplicated_email_error")
        return redirect("/")

    # Case : valid registration 
    else:
        # encrypt using bcrypt library
        user_hashpw = bcrypt.hashpw(request.POST["password"].encode(), bcrypt.gensalt())
        User.objects.create(first_name = request.POST["first_name"], last_name = request.POST["last_name"], email = request.POST["email"], password = user_hashpw)
    
        # login status & user id --> saves at session ( #### be careful not to save entire user information on session #### )
        request.session["login_status_and_id"] = { "status": True, "login_id": User.objects.get(email=request.POST["email"]).id }

        # redirect to successful route with message
        messages.success(request, "Successfully, registered and logged in!", extra_tags = "registration_success")
        return redirect("/success")

# Login process route
def loginprocess(request):

    # Case : raise an error if password does not entered
    if len(request.POST["login_password"]) < 1:
        messages.error(request, "Enter your password", extra_tags = "login_pass_error")

    # Case : raise an error if login email does not entered
    if len(request.POST["login_email"]) < 1:
        messages.error(request, "Enter your email", extra_tags = "login_error")
        return redirect("/")

    # Case : raise an error if login email is not valid form
    elif not re.compile(r'^[a-zA-Z0-9+-_]+@[a-zA-Z0-9+-_]+.[a-zA-Z0-9+-_]$').match(request.POST["login_email"]):
        messages.error(request, "Please enter vaild email form (eg. abc123@gmail.com)", extra_tags = "login_error")
        return redirect("/")

    # Case : raise an error if email does not exist on database
    elif len(User.objects.filter(email=request.POST["login_email"])) < 1:
        messages.error(request, "Email is not in database", extra_tags = "login_error")
        return redirect("/")

    # Case : login form valid and email exists on database
    else:
        # check user password matched with database using bcrypt library
        if not bcrypt.checkpw(request.POST["login_password"].encode(), User.objects.get(email=request.POST["login_email"]).password.encode()):
            messages.error(request, "Wrong password, please check your password again", extra_tags = "login_error")
            return redirect("/")
        
        # Case : successful login 
        else:
            messages.success(request, "Successfully, logged in!", extra_tags = "login_success")

            # change login status with user id ( #### be careful not to save sensitive user information on session #### )
            request.session["login_status_and_id"] = { "status" : True, "login_id" : User.objects.get(email=request.POST["login_email"]).id }
            return redirect("/success")

# Logout process route
def logoutprocess(request):
    del request.session["login_status_and_id"]
    return redirect("/")
