# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages
from models import User

# Create your views here.

def index(request):
    context = {
        "users" : User.objects.all(),
    }
    return render(request, "semi_restful_users_app/index.html", context)

def addpage(request):
    context = {

    }
    return render(request, "semi_restful_users_app/addpage.html", context)

def showpage(request, id):
    context = {
        "user" : User.objects.get(id=id),
    }
    return render(request, "semi_restful_users_app/showpage.html", context)

def editpage(request, id):
    context = {
        "user" : User.objects.get(id=id),
    }
    return render(request, "semi_restful_users_app/editpage.html", context)

def addprocess(request):
    errors = User.objects.custom_basic_validator(request.POST)
    if len(errors):
        for key in errors.keys():
            messages.error(request, errors[key])
            return redirect("/users/create")
    else:
        User.objects.create(first_name=request.POST["first_name"], last_name=request.POST["last_name"], email=request.POST["email"])
        return redirect("/users")

def updateprocess(request, id):
    errors = User.objects.custom_basic_validator(request.POST)
    if len(errors):
        for key in errors.keys():
            messages.error(request, errors[key])
        return redirect("/users/"+id+"/edit")
    else:
        user = User.objects.get(id=id)
        user.first_name = request.POST["first_name"]
        user.last_name = request.POST["last_name"]
        user.email = request.POST["email"]
        user.save()
        return redirect("/users")

def deleteprocess(request, id):
    User.objects.get(id=id).delete()
    return redirect("/users")


