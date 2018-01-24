from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.homeredirect),
    url(r'^amadon$', views.index),
    url(r'^amadon/process$', views.process),
    url(r'^reset$', views.reset),
    url(r'^amadon/reset$', views.reset),
    url(r'^amadon/checkout$', views.checkout),
]
