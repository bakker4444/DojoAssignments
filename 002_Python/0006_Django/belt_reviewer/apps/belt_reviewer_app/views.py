# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages
from models import User, Book, Review, Author
import bcrypt
import re

# Create your views here.

# Login and Registration route
def index(request):
    # Login Check
    if "login_status_and_id" not in request.session:
        return redirect("/initialization")
    else:
        # user : already logged in
        if request.session["login_status_and_id"]["status"] == True:
            return redirect("/books")
        # user : not logged in
        else:
            return render(request, "belt_reviewer_app/index.html")

# Session Initialization route
def initialization(request):
    request.session["login_status_and_id"] = { "status" : False, "login_id" : 0 }
    return redirect("/")

# Registration Process route
def registrationprocess(request):

    # Basic data form validator
    errors = User.objects.custom_registration_validator(request.POST)
    
    # Case : form is not valid
    if len(errors):
        for key, value in errors.iteritems():
            messages.error(request, value, extra_tags = key)
        return redirect("/")

    # Case : user email already exists in database
    elif len(User.objects.filter(email=request.POST["email"])) > 0:
        errors["duplicated_email_error"] = "Email is already existed"
        messages.error(request, errors["duplicated_email_error"], extra_tags = "duplicated_email_error")
        return redirect("/")

    # Case : valid form with registration success
    else:

        # Password hashing using bcrypt library
        user_hashpw = bcrypt.hashpw(request.POST["password"].encode(), bcrypt.gensalt())
        User.objects.create(name = request.POST["name"], alias = request.POST["alias"], email = request.POST["email"], password = user_hashpw)

        # login status + user id saves in session
        request.session["login_status_and_id"] = { "status": True, "login_id": User.objects.get(email=request.POST["email"]).id }
        return redirect("/books")

# Login process route
def loginprocess(request):
    
    # Case : email does not typed
    if len(request.POST["login_email"]) < 1:
        messages.error(request, "Enter your email", extra_tags = "login_error")
        return redirect("/")

    # Case : password does not typed
    elif len(request.POST["login_password"]) < 1:
        messages.error(request, "Enter your password", extra_tags = "login_password_error")
        return redirect("/")

    # Case : email - not valid format
    elif not re.compile(r'^[a-zA-Z0-9+-_]+@[a-zA-Z0-9+-_]+.[a-zA-Z0-9+-_]$').match(request.POST["login_email"]):
        messages.error(request, "Please enter vaild email form (eg. abc123@gmail.com)", extra_tags = "login_error")
        return redirect("/")

    # Case : email - not exists in database
    elif len(User.objects.filter(email=request.POST["login_email"])) < 1:
        messages.error(request, "Email is not in database", extra_tags = "login_error")
        return redirect("/")

    else:
        # Case : password not match to database
        if not bcrypt.checkpw(request.POST["login_password"].encode(), User.objects.get(email=request.POST["login_email"]).password.encode()):
            messages.error(request, "Wrong password, please check your password again", extra_tags = "login_error")
            return redirect("/")
        
        # Case : Successfully logged in
        else:
            request.session["login_status_and_id"] = { "status" : True, "login_id" : User.objects.get(email=request.POST["login_email"]).id }
            return redirect("/books")

# Login main page route
def book(request):

    # Login status check
    if request.session["login_status_and_id"]["status"] == False:
        messages.error(request, "Login Fail, please login again!", extra_tags="login_fail_error")
        return redirect("/")
    else:
        context ={
            "user_name" : User.objects.get(id=request.session["login_status_and_id"]["login_id"]).name,
            "reviews" : Review.objects.raw("SELECT * FROM belt_reviewer_app_Review ORDER BY created_at DESC LIMIT 3"),
            "books" : Book.objects.all().order_by("-created_at"),
        }
        return render(request, "belt_reviewer_app/book.html", context)

# Book information rendering page route
def bookinfo(request, book_id):
    
    # Login status check
    if request.session["login_status_and_id"]["status"] == False:
        messages.error(request, "Login Fail, please login again!", extra_tags="login_fail_error")
        return redirect("/")
    else:
        context = {
            "book_id" : book_id,
            "book_name" : Book.objects.get(id=book_id).name,
            "book_authors" : Book.objects.get(id=book_id).authors.all(),
            "login_id" : request.session["login_status_and_id"]["login_id"],
            "reviews" : Review.objects.filter(book = Book.objects.get(id=book_id)).order_by("-created_at"),
        }
        return render(request, "belt_reviewer_app/bookinfo.html", context)

# User Information rendering page route
def userinfo(request, user_id):

    # Login status check
    if request.session["login_status_and_id"]["status"] == False:
        messages.error(request, "Login Fail, please login again!", extra_tags="login_fail_error")
        return redirect("/")
    else:
        context = {
            "user" : User.objects.get(id=user_id),
            "total_review" : User.objects.get(id=user_id).user_reviews.all().count(),
            "reviews" : User.objects.get(id=user_id).user_reviews.all(),
        }
        return render(request, "belt_reviewer_app/userinfo.html", context)

# "Add book and review" rendering page route
def bookaddpage(request):
    if request.session["login_status_and_id"]["status"] == False:
        messages.error(request, "Login Fail, please login again!", extra_tags="login_fail_error")
        return redirect("/")
    else:
        context = {
            "authors" : Author.objects.all(),
        }
        return render(request, "belt_reviewer_app/addbookpage.html", context)

# "Add book and review" process route
def addbookandreviewprocess(request):

    # Login status check
    if request.session["login_status_and_id"]["status"] == False:
        messages.error(request, "Login Fail, please login again!", extra_tags="login_fail_error")
        return redirect("/")

    else:

        # Case : title not entered
        if len(request.POST["title"]) < 1:
            messages.error(request, "Please enter your book title (Not accepted blank book title", extra_tags="title_error")
            return redirect("/books/add")
        else:
            # Case : book title is exists - use database data
            if len(Book.objects.filter(name = request.POST["title"])) > 0:
                book = Book.objects.get(name = request.POST["title"])

            # Case : new book title
            else:
                Book.objects.create(name = request.POST["title"])
                book = Book.objects.get(name = request.POST["title"])
            
            # Case : new author - typed
            if request.POST["new_author"] != u"":

                # Case : if typed new author does not exist in database - create new author
                if len(Author.objects.filter(name=request.POST["new_author"])) < 1:
                    Author.objects.create(name = request.POST["new_author"])
                    author = Author.objects.get(name = request.POST["new_author"])
                    author.books.add(book)
                    author.save()

                # Case : if typed new author already exists in database - use database author
                else:
                    author = Author.objects.get(name = request.POST["new_author"])
                    author.books.add(book)
                    author.save()

            # Case : new author - not typed - use exist_author data
            else:
                author = Author.objects.get(name = request.POST["exist_author"])
                author.books.add(book)
                author.save()

            # Create review
            Review.objects.create(rating = request.POST["rating"], review = request.POST["review"], user = User.objects.get(id=request.session["login_status_and_id"]["login_id"]), book = book)
            return redirect("/books/" + str(book.id))

# Add review on book info pages process route
def addreviewprocess(request, book_id):
    user = User.objects.get(id=request.session["login_status_and_id"]["login_id"])
    book = Book.objects.get(id=book_id)
    Review.objects.create(rating=request.POST["rating"], review=request.POST["review"], user=user, book = book)
    return redirect("/books/" + str(book_id))

# Review deleting route
def deletereview(request, review_id):
    book_id = Review.objects.get(id=review_id).book.id
    Review.objects.get(id=review_id).delete()
    return redirect("/books/"+str(book_id))

# Logout process route
def logoutprocess(request):
    del request.session["login_status_and_id"]
    return redirect("/")

