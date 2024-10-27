from django.urls import path

from .views import MetricView


urlpatterns = [
    path('', MetricView.as_view(), name='metrics'),
]