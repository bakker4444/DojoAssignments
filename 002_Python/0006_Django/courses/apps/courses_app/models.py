# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class CustomManager(models.Manager):
    def custom_form_validator(self, user_data):
        errors = {}
        if len(user_data["course_name"]) < 1:
            errors["error_course_name"] = "Please enter course name ( > 5 characters )"
        elif len(user_data["course_name"]) < 5:
            errors["error_course_name"] = "Please enter course name more than 5 characters"
        if len(user_data["desc"]) < 1:
            errors["error_desc"] = "Please enter description ( > 15 characters )"
        elif len(user_data["desc"]) < 15:
            errors["error_desc"] = "Please enter description more than 15 characters"
        return errors

class Course(models.Model):
    name = models.CharField(max_length = 255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    objects = CustomManager()

    def __unicode__(self):
        return "name : " + self.name + ", description : " + ", created_at : " + str(self.created_at)






