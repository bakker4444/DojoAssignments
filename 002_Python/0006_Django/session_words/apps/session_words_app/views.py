# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from datetime import datetime

# Create your views here.

def index(request):

    ## session variable initialize
    if "error_message" not in request.session.keys():
        request.session["error_message"] = ""
    if "color" not in request.session.keys():
        request.session["color"] = ""
    if "font_big" not in request.session.keys():
        request.session["font_big"] = ""
    if "word_list" not in request.session.keys():
        request.session["word_list"] = []
    context = {
        "error_message" : request.session["error_message"],
        "word_list" : request.session["word_list"],
    }
    return render(request, "session_words_app/index.html", context)

def process(request):

    ## form validator
    # Case : not enter the word
    if len(request.POST["word"]) < 1:
        request.session["error_message"] = "Enter your word(s)"
        return redirect("/session_words")

    # Case : not click color radio
    elif "color" not in request.POST.keys():
        request.session["error_message"] = "Click your font color"
        return redirect("/session_words")

    # Case : form is valid
    else:

        # remove error message
        request.session["error_message"] = ""

        # store individual words and related info saves in dictionary
        temp_dict = {}
        temp_dict["words"] = request.POST["word"]

        # color setting
        if "color" not in request.POST.keys():
            temp_dict["color"] = ""
        else:
            if request.POST["color"] == "red":
                temp_dict["color"] = "redfont"
            elif request.POST["color"] == "green":
                temp_dict["color"] = "greenfont"
            elif request.POST["color"] == "blue":
                temp_dict["color"] = "bluefont"

        # font setting 
        if "font_big" in request.POST.keys():
            temp_dict["color"] += " font_big"

        # get current time
        current_time = datetime.now().strftime("%H:%M:%S%p, %b-%d-%Y")
        temp_dict["add_time"] = "- added on " + str(current_time)

        # insert dictionary in front of list (descending order)
        request.session["word_list"].insert(0, temp_dict)

        return redirect("/session_words")

# reset route ( every keys in session deletes)
def reset(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect("/session_words")
