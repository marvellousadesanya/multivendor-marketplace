from django.urls import path, include
from .views import CartView, CartItemView
from rest_framework import routers


#urlpatterns = [
#    path('', CartView.as_view()),
#    path('<int:pk>/', CartItemView.as_view()),
#]

router = routers.DefaultRouter()
router.register(r'api/cart/', CartView, 'cart')

urlpatterns = [
    path('', include(router.urls)),
    path('cart-item/<int:id>', CartView.add_to_cart)
]
