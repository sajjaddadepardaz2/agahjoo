from django.db import models
from django.contrib.auth.models import User

class City(models.Model):
    name = models.CharField(max_length=100, unique=True)
    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=100)
    parent = models.ForeignKey('self', null=True, blank=True, related_name='children', on_delete=models.CASCADE)
    icon = models.CharField(max_length=100, blank=True)
    color = models.CharField(max_length=20, blank=True)
    def __str__(self):
        return self.name

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15, unique=True)
    otp = models.CharField(max_length=6, blank=True)
    saved_ads = models.ManyToManyField('Ad', blank=True, related_name='saved_by')
    def __str__(self):
        return self.user.username

class Ad(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=12, decimal_places=0)
    images = models.ImageField(upload_to='ads/', blank=True, null=True)
    date_posted = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    def __str__(self):
        return self.title

# Create your models here.
