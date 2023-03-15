#from rest_framework.generics import ListCreateAPIView, RetrieveAPIView
from rest_framework import viewsets
from cart.models import Cart, CartItem
from .serializers import CartSerializer, CartItemSerializer

class CartView(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    
class CartItemView(viewsets.ModelViewSet):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer
    ordering_fields = {'product', 'cart', 'quantity'}
    filterset_fields = {'product', 'cart', 'quantity'}
    search_fields = ['product']