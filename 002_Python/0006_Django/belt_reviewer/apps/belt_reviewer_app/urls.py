from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^books$', views.book),
    url(r'^books/add$', views.bookaddpage),
    url(r'^addbookandreviewprocess$', views.addbookandreviewprocess),
    url(r'^addreviewprocess/(?P<book_id>\d+)$', views.addreviewprocess),
    url(r'^deletereview/(?P<review_id>\d+)$', views.deletereview),

    url(r'^users/(?P<user_id>\d+)$', views.userinfo),
    url(r'^books/(?P<book_id>\d+)$', views.bookinfo),

    url(r'^registrationprocess$', views.registrationprocess),
    url(r'^loginprocess$', views.loginprocess),
    url(r'^logoutprocess$', views.logoutprocess),
    url(r'^initialization$', views.initialization),
    url(r'^$', views.index),
]
