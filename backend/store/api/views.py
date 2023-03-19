#from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView
from rest_framework import viewsets
from store.models import Product
from .serializers import ProductSerializer, CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from django.core.exceptions import ObjectDoesNotExist

class ProductListView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    @staticmethod
    @api_view(['GET'])
    @permission_classes((permissions.AllowAny,))
    def product_item(request, id):
        try:
            if request.method == 'GET':
                product = Product.objects.get(id=id)  
                if product.stock != 0:
                    product.stock -= 1
                    product.save()
                    serializer = ProductSerializer(product)
                    return Response(serializer.data)
                if product.stock == 0:
                        product.is_available -= 1
                        return Response(status.HTTP_101_SWITCHING_PROTOCOLS)
                   
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    
class ProductDetailView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    ordering_fields = {'price', 'stock'}
    filterset_fields = {'price', 'stock'}
    search_fields = ['product_name']


#class CustomTokenObtainPairView(TokenObtainPairView):
#    serializer_class = CustomTokenObtainPairSerializer