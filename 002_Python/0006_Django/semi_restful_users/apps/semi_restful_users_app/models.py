# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import re

class CustomManager(models.Manager):
    def custom_basic_validator(self, user_data):
        errors = {}
        if len(user_data["first_name"]) < 1:
            errors["error_first_name"] = "Enter your first name (not empty)"
        if len(user_data["last_name"]) < 1:
            errors["error_last_name"] = "Enter your last name (not empty)"
        if len(user_data["email"]) < 1:
            errors["error_email"] = "Enter your email (not empty)"
        elif not re.compile(r'[a-zA-Z0-9+-_]+@[a-zA-Z0-9+-_]+.[a-zA-Z0-9]+').match(user_data["email"]):
            errors["error_email"] = "Enter valid email form ( e.g. abc@gmail.com )"
        return errors

class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add = True)
    objects = CustomManager()

    def __unicode__(self):
        return "id : " + str(self.id) + ", first_name : " + self.first_name + ", last_name : " + self.last_name + ", email : " + self.email + ", created_at : " + str(self.created_at)

