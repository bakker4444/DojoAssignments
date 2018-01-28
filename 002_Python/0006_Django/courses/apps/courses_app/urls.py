from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^addprocess$', views.addprocess),
    url(r'^destroyprocess/(?P<id>\d+)', views.destroyprocess),
    url(r'^destroy/(?P<id>\d+)$', views.confirmationpage),
    url(r'^$', views.index),
]
