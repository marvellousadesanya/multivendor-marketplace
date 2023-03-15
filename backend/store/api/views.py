#from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView
from rest_framework import viewsets
from store.models import Product
from .serializers import ProductSerializer, CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class ProductListView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
class ProductDetailView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    ordering_fields = {'price', 'stock'}
    filterset_fields = {'price', 'stock'}
    search_fields = ['product_name']
    
#class CustomTokenObtainPairView(TokenObtainPairView):
#    serializer_class = CustomTokenObtainPairSerializer