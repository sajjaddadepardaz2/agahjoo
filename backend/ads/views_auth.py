from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .models import UserProfile
from .api import send_otp
import random

class OTPRequestView(APIView):
    def post(self, request):
        phone = request.data.get('phone')
        if not phone:
            return Response({'error': 'شماره تلفن الزامی است.'}, status=status.HTTP_400_BAD_REQUEST)
        otp = str(random.randint(100000, 999999))
        user, created = User.objects.get_or_create(username=phone)
        profile, _ = UserProfile.objects.get_or_create(user=user, phone=phone)
        profile.otp = otp
        profile.save()
        send_otp(phone, otp)
        return Response({'message': 'کد تایید ارسال شد.'})

class OTPVerifyView(APIView):
    def post(self, request):
        phone = request.data.get('phone')
        otp = request.data.get('otp')
        try:
            profile = UserProfile.objects.get(phone=phone, otp=otp)
            return Response({'message': 'تایید شد.'})
        except UserProfile.DoesNotExist:
            return Response({'error': 'کد تایید اشتباه است.'}, status=status.HTTP_400_BAD_REQUEST)
