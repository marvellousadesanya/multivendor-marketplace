from django.urls import path, include
#from django.urls.conf import include
from rest_framework import routers
from .views import ProductDetailView, ProductListView


#urlpatterns = [
#    path('', ProductListView.as_view()),
#    path('<int:pk>/', ProductDetailView.as_view())
#]

router = routers.DefaultRouter()
router.register(r'api/store/', ProductListView, 'store')

urlpatterns = [
    path('', include(router.urls)),
    path('product-item/<int:pk>', ProductListView.product_item)
]
