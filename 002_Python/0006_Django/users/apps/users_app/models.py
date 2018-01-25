# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
#from django.core.validators import RegexValidator

# Create your models here.

class user(models.Model):

    # Example using built-in validator
    #first_name_regex = RegexValidator(regex=r'', message="First name must be entered more than 3 characters or more")
    #first_name = models.CharField(validators=[first_name_regex], max_length = 255)

    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.EmailField(max_length = 255)
    age = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __unicode__(self):
        return "id: " + str(self.id) + ", first_name: " + self.first_name + ", last_name: " + self.last_name + ", email: " + self.email + ", created_at: " + str(self.created_at) + ", updated_at: " + str(self.updated_at)

