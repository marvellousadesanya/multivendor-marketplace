from django.urls import path
from .views import CartView, CartItemView
from rest_framework import routers


#urlpatterns = [
#    path('', CartView.as_view()),
#    path('<int:pk>/', CartItemView.as_view()),
#]

router = routers.DefaultRouter()
router.register(r'api/cart/', CartView, 'cart')

urlpatterns = router.urls