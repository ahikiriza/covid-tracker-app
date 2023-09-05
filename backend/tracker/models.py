from django.db import models

class CovidStatus(models.Model):
    # id =models.AutoField(verbose_name ='Id')
    country =models.CharField(max_length=255, null =True, blank= True, verbose_name ='Country')
    date =models.DateField(null=True, blank =True, verbose_name='Date')
    confirmedCases =models.IntegerField( null=True, blank =True, verbose_name='Confirmed Cases')
    death =models.IntegerField( null=True, blank =True, verbose_name='Deaths')
    recoveries =models.IntegerField( null=True, blank =True, verbose_name='Recoveries')
    status =models.CharField(max_length=255, null=True, blank=True, verbose_name='Status')

    DisplayFields =['id','country', 'date','confirmedCases','death','recoveries', 'status']
    SearchableFields =['id','country', 'date','confirmedCases','death','recoveries', 'status']

    class Meta:
        db_table ='CovidStatus'
