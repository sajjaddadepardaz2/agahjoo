import requests
from django.conf import settings

def send_otp(phone, otp):
    url = 'https://api.sms.ir/v1/send'  # Example endpoint
    headers = {'Content-Type': 'application/json', 'X-API-KEY': settings.SMS_API_KEY}
    data = {
        'mobile': phone,
        'message': f'کد تایید شما: {otp}'
    }
    response = requests.post(url, json=data, headers=headers)
    return response.status_code == 200
