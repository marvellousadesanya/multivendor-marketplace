from django.db import models
from store.models import Product
#from cart.models import Cart


# Create your models here.
class Cart(models.Model):
    cart_id = models.CharField(max_length=200, blank=True)
    date_added = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.cart_id
    
class CartItem(models.Model):
    """
        This class defined the Carting process making user to cart items to the database
        Args:
        product: Serve as a foreign key to the Product class
        price: In decimal with 9 maximum number of digits
        quantity: Base on the number of stock available in store Product
        is_active: Return true if quantity is available
    """
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=9, decimal_places=2)
    quantity = models.IntegerField()
    is_active = models.BooleanField(default=True)
    
    def __repr__(self):
        return self.product
    #class Meta:
    #    db_table='product_description'