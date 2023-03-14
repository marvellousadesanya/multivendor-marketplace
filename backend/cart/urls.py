from django.urls import path
from . import views

urlpatterns = [
    path('cart-item/<int:pk>', views.cart)
]