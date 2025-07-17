from django_filters import rest_framework as filters
from .models import Ad

class AdFilter(filters.FilterSet):
    price_min = filters.NumberFilter(field_name='price', lookup_expr='gte')
    price_max = filters.NumberFilter(field_name='price', lookup_expr='lte')
    date_posted = filters.DateFromToRangeFilter()
    city = filters.CharFilter(field_name='city__name', lookup_expr='icontains')
    category = filters.CharFilter(field_name='category__name', lookup_expr='icontains')
    text = filters.CharFilter(method='filter_text')

    class Meta:
        model = Ad
        fields = ['price_min', 'price_max', 'date_posted', 'city', 'category', 'text']

    def filter_text(self, queryset, name, value):
        return queryset.filter(title__icontains=value) | queryset.filter(description__icontains=value)
