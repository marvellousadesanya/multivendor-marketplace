#from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView
from rest_framework import viewsets
from category.models import Category
from .serializers import CategorySerializer

class CategoryListView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
class CategoryDetailView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    ordering_fields = {'category_name', 'description'}
    filterset_fields = {'category_name', 'description'}
    search_fields = ['category_name']