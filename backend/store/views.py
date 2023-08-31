from django.shortcuts import render, get_object_or_404
from .models import Product

def product_detail(request, slug):
    # retrieve the product with the given slug or raise a 404 error if it doesn't exist
    product = get_object_or_404(Product, slug=slug)

    # check if the stock is less than 1 and raise an exception if it is
    if product.stock < 1:
        raise ValueError('This product is out of stock')

    else:
        {'product' : product}
    return product
    # if the stock is greater than or equal to 1, render the product detail template
    #context = {'product': product}
    #return render(request, 'product_detail.html', context)