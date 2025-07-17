from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Ad, Category, UserProfile, City

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ['id', 'name']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'parent', 'icon', 'color']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = UserProfile
        fields = ['user', 'phone', 'saved_ads']

class AdSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    category = CategorySerializer()
    city = CitySerializer()
    class Meta:
        model = Ad
        fields = ['id', 'user', 'title', 'description', 'category', 'city', 'price', 'images', 'date_posted', 'is_active']
