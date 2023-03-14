from django.urls import path
from .views import ProductDetailView, ProductListView
from . import views
urlpatterns = [
    path('', ProductListView.as_view()),
    path('<int:pk>/', ProductDetailView.as_view()),
    path('products/<int:id>/', views.ProductListView.product_item),
]
