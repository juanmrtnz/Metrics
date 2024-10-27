from django.contrib import admin

from .models import Visit, Click, Session


admin.site.register(Visit)
admin.site.register(Click)
admin.site.register(Session)
