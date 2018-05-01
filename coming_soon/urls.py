from django.conf.urls import url
from . import views

app_name = 'coming_soon'

urlpatterns = [
    url(r'^$', views.home, name="home"),
    url(r'^contact$', views.contact, name='contact'),
]
