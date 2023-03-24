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

    @staticmethod
    @permission_classes((permissions.AllowAny))
    @api_view(['POST', 'GET'])
    def add_to_cart(request, id):
        """
        This method allow user to cart item and save to database,\
            pending the time of the product availability
            returns carted items if it meet the code requirements
        Args:
            request: POST request method for now (updated later)
            id: product id parameter to be input
        """
        if request.method == 'POST':
            product = Product.objects.get(id=id)
            if product.stock > 0:
                quantity = int(request.POST.get('quantity'))
                price = product.price * quantity
                if quantity > product.stock:
                    return Response(status.HTTP_226_IM_USED)
                cart_item = CartItem.objects.create(quantity=quantity, price=price,  product=Product.objects.get(id=id))
                cart_item.save()
                serializer = CartItemSerializer(cart_item)
                return Response(serializer.data)
        
    
class CartItemView(viewsets.ModelViewSet):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer
    ordering_fields = {'product', 'cart', 'quantity'}
    filterset_fields = {'product', 'cart', 'quantity'}
    search_fields = ['product']