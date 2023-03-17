#from rest_framework.generics import ListCreateAPIView, RetrieveAPIView
from rest_framework import viewsets
from cart.models import Cart, CartItem
from .serializers import CartSerializer, CartItemSerializer
from store.models import Product
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions

class CartView(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    
    @permission_classes((permissions.AllowAny,))
    @api_view(['GET','POST'])
    def add_to_cart(request):
        if request.method == 'POST':
            if Product.is_available == 1 and Product.stock > 0:
                quantity = request.POST.get('stock')
                price = request.POST.get('price')
                if quantity > Product.stock:
                    print("Maximum number of stock available exceeeded")
                else:
                    CartItem.objects.create(quantity=quantity, price=price)
                    return Response(status.HTTP_201_CREATED)
            else:
                print('Out of stock')
        
    
class CartItemView(viewsets.ModelViewSet):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer
    ordering_fields = {'product', 'cart', 'quantity'}
    filterset_fields = {'product', 'cart', 'quantity'}
    search_fields = ['product']