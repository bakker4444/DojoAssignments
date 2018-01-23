# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

# Create your views here.
def index(request):
    if "random_count" not in request.session.keys():
        request.session["random_count"] = 0
    else:
        print "here 1"
        request.session["random_count"] += 1
        context = {
            "random_count" : request.session["random_count"],
            "random_number" : get_random_string(length=14),
        }
        return render(request, "random_word/index.html", context)

def reset(request):
    print "here 2"

    request.session["random_count"] = 0
    return redirect("/random_word")
