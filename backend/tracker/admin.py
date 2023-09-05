from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(CovidStatus)
class CovidStatusAdmin(admin.ModelAdmin):
    list_display =CovidStatus.DisplayFields
    search_fields =CovidStatus.SearchableFields

