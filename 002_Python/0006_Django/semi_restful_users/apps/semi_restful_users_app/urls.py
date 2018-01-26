from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^create$', views.addpage),
    url(r'^(?P<id>[0-9]+)$', views.showpage),
    url(r'^(?P<id>[0-9]+)/edit$', views.editpage),
    url(r'^addprocess$', views.addprocess),
    url(r'^(?P<id>[0-9]+)/updateprocess$', views.updateprocess),
    url(r'^(?P<id>[0-9]+)/deleteprocess$', views.deleteprocess),
]
