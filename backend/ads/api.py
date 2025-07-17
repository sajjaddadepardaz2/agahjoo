import requests
from django.conf import settings

def send_otp(phone, otp):
    url = 'https://api.sms.ir/v1/send/verify'
    headers = {'Content-Type': 'application/json', 'X-API-KEY': settings.SMS_API_KEY}
    data = {
        "mobile": phone,
        "templateId": 100000,
        "parameters": [
            {
                "name": "Code",
                "value": otp
            }
        ]
    }
    response = requests.post(url, json=data, headers=headers)
    print("SMS.ir response:", response.status_code, response.text)
    return response.status_code == 200
