from django.db import models
from category.models import Category

# Create your models here.

class Product(models.Model):
    """
        The store base class to define all product attributes
        Args:
            product_name: defines product name and must be unique name with 50 max character
            slug: generating valid data for product name
            description: product description with maximum number of 1000 character
            price: product price(update later)
            images: Product image
            stock: number of product items to be available
            is_available: to be true if stock is greater than 1
            created_date: date product added
            modified_date: date product updated
            category: categories item must belong
    """
    product_name = models.CharField(max_length=50, unique=True)
    slug         = models.SlugField(max_length=50, unique=True)
    description  = models.TextField(max_length=1000, blank=True)
    price        = models.IntegerField()
    images       = models.ImageField(upload_to='photos/product')
    stock        = models.IntegerField()
    is_available = models.BooleanField(default=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date= models.DateTimeField(auto_now=True)
    category     = models.ForeignKey(Category, on_delete=models.PROTECT)
    
    def __str__(self):
        return self.product_name