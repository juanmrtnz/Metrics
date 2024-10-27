from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Visit, Click, Session
from .serializers import MetricSerializer


class MetricView(APIView):
    def get(self, request):
        month = request.GET.get('month')
        visits = Visit.objects.filter(date__month=month, date__year=2024).order_by('-date')
        sessions = Session.objects.filter(date__month=month, date__year=2024).order_by('-date')
        clicks = Click.objects.filter(date__month=month, date__year=2024).order_by('-date')

        items = []
        for metric in visits:
            items.append({
                'id': metric.id,
                'date': metric.date,
                'type': 'Visit',
                'value': metric.value,
            })
        for metric in clicks:
            items.append({
                'id': metric.id,
                'date': metric.date,
                'type': 'Click',
                'value': metric.value,
            })
        for metric in sessions:
            items.append({
                'id': metric.id,
                'date': metric.date,
                'type': 'Session',
                'value': metric.value,
            })

        return Response(items)

    def post(self, request):
        metric_type = request.data.get('type')
        model = None

        if metric_type == 'Visit':
            model = Visit
        elif metric_type == 'Session':
            model = Session
        elif metric_type == 'Click':
            model = Click

        serializer = MetricSerializer(data=request.data)
        serializer.Meta.model = model

        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(serializer.data)