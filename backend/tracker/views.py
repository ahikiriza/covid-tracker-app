from django.shortcuts import render
from rest_framework import viewsets
from .models import CovidStatus
from .serializers import CovidStatusSerializer

# Create your views here.

class CovidStatusViewSet(viewsets.ModelViewSet):
    queryset =CovidStatus.objects.all()
    serializer_class =CovidStatusSerializer