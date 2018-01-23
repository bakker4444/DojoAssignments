# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

# front page route
def index(request):
    # Initial session key setup
    if "error_message" not in request.session.keys():
        request.session["error_message"] = ""
        request.session["submit_count"] = 0

    context = {
            "error_message" : request.session["error_message"]
    }

    return render(request, "survey_form_app/index.html", context)

# form process route
def process(request):
    # Case : raise error if name is not entered
    if len(request.POST["name"]) < 1:
        request.session["error_message"] = "Enter your name! (Not empty)"
        return redirect("/")
    
    # Case : passing the form validation
    else:
        request.session["error_message"] = ""
        request.session["name"] = request.POST["name"]
        request.session["location"] = request.POST["location"]
        request.session["favorite_language"] = request.POST["favorite_language"]
        request.session["comment"] = request.POST["comment"]
        request.session["submit_count"] += 1
        return redirect("/result")

# result render route
def result(request):
    context = {
        "name" : request.session["name"],
        "location" : request.session["location"],
        "favorite_language" : request.session["favorite_language"],
        "comment" : request.session["comment"],
        "submit_count" : request.session["submit_count"]
    }
    return render(request, "survey_form_app/result.html", context)

# session reset route
def reset(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect("/")

