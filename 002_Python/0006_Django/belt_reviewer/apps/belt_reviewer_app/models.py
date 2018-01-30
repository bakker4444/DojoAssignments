# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
import re

# Create your models here.

class RegistrationManager(models.Manager):
    def custom_registration_validator(self, user_data):
        errors = {}

        ### Case : check name format
        if len(user_data["name"]) < 1:
            errors["name_error"] = "Name is required ( Not accepted blank name )"
        
        ### Case : check alias format
        if len(user_data["alias"]) < 1:
            errors["alias_error"] = "Alias is required ( Not accepted blank alias )"
        elif len(user_data["alias"]) < 3:
            errors["alias_error"] = "Alias should be greater than or equal to 3 characters ( Not accepted fewer than 3 characters )"
        
        ### Case : check email format
        if len(user_data["email"]) < 1:
            errors["email_error"] = "Email is required ( Not accepted blank email )"
        elif not re.compile(r'^[a-zA-Z0-9+-_]+@[a-zA-Z0-9+-_]+.[a-zA-Z0-9+-_]$').match(user_data["email"]):
            errors["email_error"] = "Please enter vaild email form (eg. abc123@gmail.com)"

        ### Case : check password format
        if len(user_data["password"]) < 1:
            errors["password_error"] = "Please enter your password ( Not accepted blank password )"
        elif len(user_data["password"]) < 8:
            errors["password_error"] = "Please enter your password more than or equal to 8 characters ( >= 8 characters/numbers )"
        elif not user_data["password"] == user_data["confirmation_password"]:
            errors["password_error"] = "Please match your password and confirmation password"

        return errors

class User(models.Model):
    name = models.CharField(max_length = 255)
    alias = models.CharField(max_length = 255)
    email = models.EmailField()
    password = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = RegistrationManager()

    def __unicode__(self):
        return "id : " + str(self.id) + ", name : " + self.name + ", alias : " + str(self.alias) + ", email : " + self.email + ", password : " + str(self.password) + ", created_at : " + str(self.created_at) + ", updated_at = " + str(self.updated_at)

class Book(models.Model):
    name = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __unicode__(self):
        return "id : " + str(self.id) + ", name : " + self.name + ", created_at : " + str(self.created_at) + ", updated_at = " + str(self.updated_at)


class Review(models.Model):
    rating = models.FloatField(validators = [MinValueValidator(0.0), MaxValueValidator(5.0)])
    review = models.TextField()
    user = models.ForeignKey(User, related_name = "user_reviews")
    book = models.ForeignKey(Book, related_name = "book_reviews")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __unicode__(self):
        return "id : " + str(self.id) + ", rating : " + str(self.rating) + ", review : " + self.review + ", book : " + str(self.book) + ", user : " + str(self.user)

class Author(models.Model):
    name = models.CharField(max_length = 255)
    books = models.ManyToManyField(Book, related_name="authors")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __unicode__(self):
        return "id : " + str(self.id) + ", name : " + self.name + ", books : " + str(self.books)
