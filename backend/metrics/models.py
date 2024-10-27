from django.db import models
from datetime import date
    

class BaseMetric(models.Model):
    value = models.IntegerField()
    date = models.DateField(default=date.today, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True

    def __str__(self):
        return f'{self.value} {self.type}s on {self.date}'


class Visit(BaseMetric):
    pass


class Click(BaseMetric):
    pass


class Session(BaseMetric):
    pass