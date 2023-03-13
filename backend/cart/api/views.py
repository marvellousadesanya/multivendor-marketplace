from rest_framework.generics import ListCreateAPIView, RetrieveAPIView
from cart.models import Cart, CartItem
from .serializers import CartSerializer, CartItemSerializer

class CartView(ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    
class CartItemView(RetrieveAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer