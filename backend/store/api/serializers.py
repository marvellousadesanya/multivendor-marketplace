from rest_framework import serializers
from store.models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('product_name', 'description', 'price', 'is_available', 'stock', 'category',)