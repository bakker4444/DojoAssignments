# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

# Front Page rendering route
def index(request):
    return render(request, "amadon_app/index.html")

# Alternative front page route (redirect)
def homeredirect(request):
    return redirect("/amadon")

# logic calculation route
def process(request):

    # Case : initial condition setup
    if "total_number_of_transactions" not in request.session.keys():
        request.session["total_number_of_transactions"] = 0
    if "total_amount_history" not in request.session.keys():
        request.session["total_amount_history"] = 0

    # checkout total price calculation based on product_id
    if request.POST["product_id"] == u"1":      ## be careful with unicode
        request.session["total_amount"] = 19.99 * int(request.POST["quantity"])
    elif request.POST["product_id"] == u"2":    ## be careful with unicode
        request.session["total_amount"] = 29.99 * int(request.POST["quantity"])
    elif request.POST["product_id"] == u"3":    ## be careful with unicode
        request.session["total_amount"] = 4.99 * int(request.POST["quantity"])
    elif request.POST["product_id"] == u"4":    ## be careful with unicode
        request.session["total_amount"] = 49.99 * int(request.POST["quantity"])

    # historical total amount calculation
    request.session["total_amount_history"] += request.session["total_amount"]
    
    # total transaction count
    request.session["total_number_of_transactions"] += 1
    
    # redirect to checkout page
    return redirect("/amadon/checkout")

# checkout page rendering route
def checkout(request):
    context = {
        "total_amount" : request.session["total_amount"],
        "total_amount_history" : request.session["total_amount_history"],
        "total_number_of_transactions" : request.session["total_number_of_transactions"],
    }
    return render(request, "amadon_app/checkout.html", context)

# reset route (all session value resets) 
def reset(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect("/amadon")
