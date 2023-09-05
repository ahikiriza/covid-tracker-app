from rest_framework import serializers
from .models import CovidStatus

class CovidStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model =CovidStatus
        fields = ['id','country', 'date','confirmedCases','death','recoveries', 'status']