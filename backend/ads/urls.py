from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AdViewSet, CategoryViewSet, CityViewSet
from .views_auth import OTPRequestView, OTPVerifyView

router = DefaultRouter()
router.register(r'ads', AdViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'cities', CityViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/request-otp/', OTPRequestView.as_view(), name='request_otp'),
    path('auth/verify-otp/', OTPVerifyView.as_view(), name='verify_otp'),
]
