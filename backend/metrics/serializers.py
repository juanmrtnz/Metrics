from rest_framework import serializers


class MetricSerializer(serializers.ModelSerializer):
    class Meta:
        model = None  # The model will be dynamically set in the view
        fields = ['value', 'date', 'created_at']
