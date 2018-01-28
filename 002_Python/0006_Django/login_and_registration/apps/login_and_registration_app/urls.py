from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^logoutprocess$', views.logoutprocess),
    url(r'^registrationprocess$', views.registrationprocess),
    url(r'^loginprocess$', views.loginprocess),
    url(r'^success$', views.successpage),
    url(r'^$', views.index),
]
