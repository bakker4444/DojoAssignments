# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __unicode__(self):
        return "id: " + str(self.id) + ", first_name : " + self.first_name + ", last_name : " + self.last_name + ", email : " + self.email + ", created_at : " + str(self.created_at) + ", updated_at : " + str(self.updated_at)

class Book(models.Model):
    name = models.CharField(max_length = 255)
    desc = models.CharField(max_length = 255)
    uploader = models.ForeignKey(User, related_name = "uploaded_books")
    liked_users = models.ManyToManyField(User, related_name = "liked_books")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __unicode__(self):
        return "id : " + str(self.id) + ", name : " + self.name + ", desc : " + self.desc + ", uploader : " + str(self.uploader) + ", liked_users : " + str(self.liked_users) + ", created_at : " + str(self.created_at) + ", updated_at : " + str(self.updated_at)

