from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView
from category.models import Category
from .serializers import CategorySerializer

class CategoryListView(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
class CategoryDetailView(RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer