# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from models import User
import bcrypt

# Create your views here.

def index(request):
    context = {

    }
    return render(request, "login_and_registration_app/index.html", context)

def successpage(request):
    if request.session["login_status_and_id"]["status"]:
        context = {
            "user" : User.objects.get(id=request.session["login_status_and_id"]["login_id"]),
        }
        return render(request, "login_and_registration_app/successpage.html", context)
    else:
        messages.error(request, "Login error", extra_tags = "login_error")
        redirect("/")

def registrationprocess(request):
    errors = User.objects.custom_registration_validator(request.POST)
    if len(errors):
        for key, value in errors.iteritems():
            messages.error(request, value, extra_tags = key)
        return redirect("/")

    elif len(User.objects.filter(email=request.POST["email"])) > 0:
        errors["duplicated_email_error"] = "Email is already existed"
        messages.error(request, errors["duplicated_email_error"], extra_tags = "duplicated_email_error")
        return redirect("/")

    else:
        user_hashpw = bcrypt.hashpw(request.POST["password"].encode(), bcrypt.gensalt())
        User.objects.create(first_name = request.POST["first_name"], last_name = request.POST["last_name"], email = request.POST["email"], password = user_hashpw)
        request.session["login_status_and_id"] = { "status": True, "login_id": User.objects.get(email=request.POST["email"]).id }
        messages.success(request, "Successfully, registered and logged in!", extra_tags = "registration_success")
        return redirect("/success")

def loginprocess(request):
    if len(request.POST["login_password"]) < 1:
        messages.error(request, "Enter your password", extra_tags = "login_pass_error")
    if len(request.POST["login_email"]) < 1:
        messages.error(request, "Enter your email", extra_tags = "login_error")
        return redirect("/")
    elif not User.objects.get(email=request.POST["login_email"]):
        messages.error(request, "Email is not in database", extra_tags = "login_error")
        return redirect("/")
    else:
        print bcrypt.checkpw(request.POST["login_password"].encode(), User.objects.get(email=request.POST["login_email"]).password.encode())
        if not bcrypt.checkpw(request.POST["login_password"].encode(), User.objects.get(email=request.POST["login_email"]).password.encode()):
            messages.error(request, "Wrong password, please check your password again", extra_tags = "login_error")
            return redirect("/")
        else:
            messages.success(request, "Successfully, logged in!", extra_tags = "login_success")
            request.session["login_status_and_id"] = { "status" : True, "login_id" : User.objects.get(email=request.POST["login_email"]).id }
            return redirect("/success")

def logoutprocess(request):
    del request.session["login_status_and_id"]
    return redirect("/")



