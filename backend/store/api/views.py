from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView
from store.models import Product
from .serializers import ProductSerializer

class ProductListView(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
class ProductDetailView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer