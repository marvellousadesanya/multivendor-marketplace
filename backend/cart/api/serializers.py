from rest_framework import serializers
from cart.models import Cart, CartItem

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ('cart_id', 'date_added')
        
class CartItemSerializer(serializers.ModelSerializer):
    """Display attribute only"""
    class Meta:
        model = CartItem
        fields = ('product', 'price', 'quantity')