from django.shortcuts import render
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView
from .serializers import PostSerializer
from .models import Post
from rest_framework.pagination import PageNumberPagination

# Create your views here.

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_number'
    max_page_size = 5

class ListPost(ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    pagination_class = StandardResultsSetPagination
    #this gets all the post lists