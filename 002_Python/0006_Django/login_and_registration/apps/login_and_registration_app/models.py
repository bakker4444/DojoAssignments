# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import re

# Create your models here.

class RegistrationManager(models.Manager):
    def custom_registration_validator(self, request_data):
        errors = {}

        if len(request_data["first_name"]) < 1:
            errors["first_name_error"] = "First name is required ( Not accepted blank first name )"
        elif len(request_data["first_name"]) < 2:
            errors["first_name_error"] = "First name should be greater than or equal to 2 characters ( Not accepted fewer than 2 characters )"
        elif not re.compile(r'^[a-zA-Z]{2,}$').match(request_data["first_name"]):
            errors["first_name_error"] = "First name should be greater than or equal to 2 characters, letter only ( Not accepted numbers or special characters )"

        if len(request_data["last_name"]) < 1:
            errors["last_name_error"] = "Last name is required ( Not accepted blank last name )"
        elif len(request_data["last_name"]) < 2:
            errors["last_name_error"] = "Last name should be greater than or equal to 2 characters ( Not accepted fewer than 2 characters )"
        elif not re.compile(r'^[a-zA-Z]{2,}$').match(request_data["last_name"]):
            errors["last_name_error"] = "Last name should be greater than or equal to 2 characters, letter only ( Not accepted numbers or special characters )"

        if len(request_data["email"]) < 1:
            errors["email_error"] = "Email is required ( Not accepted blank email )"
        elif not re.compile(r'^[a-zA-Z0-9+-_]+@[a-zA-Z0-9+-_]+.[a-zA-Z0-9+-_]$').match(request_data["email"]):
            errors["email_error"] = "Please enter vaild email form (eg. abc123@gmail.com)"

        if len(request_data["password"]) < 1:
            errors["password_error"] = "Please enter your password ( Not accepted blank password )"
        elif len(request_data["password"]) < 8:
            errors["password_error"] = "Please enter your password more than or equal to 8 characters ( > 8 characters/numbers )"
        elif not request_data["password"] == request_data["confirmation_password"]:
            errors["password_error"] = "Please match your password and confirmation password"

        return errors

class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.EmailField()
    password = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = RegistrationManager()

    def __unicode__(self):
        return "id : " + str(self.id) + ", first_name : " + self.first_name + ", last_name : " + self.last_name + ", email : " + self.email + ", password : " + str(self.password) + ", created_at : " + str(self.created_at) + ", updated_at : " + str(self.updated_at)








