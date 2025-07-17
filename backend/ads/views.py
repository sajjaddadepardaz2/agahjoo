from rest_framework import viewsets, permissions
from .models import Ad, Category, City
from .serializers import AdSerializer, CategorySerializer, CitySerializer

class AdViewSet(viewsets.ModelViewSet):
    queryset = Ad.objects.all().order_by('-date_posted')
    serializer_class = AdSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]

class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    permission_classes = [permissions.AllowAny]
