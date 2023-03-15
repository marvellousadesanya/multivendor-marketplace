from django.urls import path
from .views import CategoryListView, CategoryDetailView
from rest_framework import routers


#urlpatterns = [
#    path('', CategoryListView.as_view()),
#    path('<int:pk>/', CategoryDetailView.as_view())
#]
router = routers.DefaultRouter()
router.register(r'api/cat/', CategoryListView, 'category')

urlpatterns = router.urls