from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('api/list', ListPost.as_view(), name='list_posty')
]
