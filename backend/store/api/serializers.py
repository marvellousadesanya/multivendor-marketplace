from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from store.models import Product
from category.models import Category
from category.api.serializers import CategorySerializer
#from rest_framework_simplejwt.serializers import TokenObtainPairSerialize

class ProductSerializer(serializers.ModelSerializer):
    category_id = serializers.IntegerField(write_only=True)
    category = CategorySerializer(read_only=True)
    
    class Meta:
        model = Product
        fields = ['product_name', 'description', 'price', 'is_available', 'stock', 'category', 'category_id']
        #('product_name', 'price', 'stock', 'is_available', 'category', 'modified_date')
        
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        # additional logic to customize token generation
        return data