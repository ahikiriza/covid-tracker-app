# Generated by Django 4.2.4 on 2023-08-28 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CovidStatus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(blank=True, max_length=255, null=True, verbose_name='Country')),
                ('date', models.DateField(blank=True, null=True, verbose_name='Date')),
                ('confirmedCases', models.TextField(blank=True, max_length=20, null=True, verbose_name='Confirmed Cases')),
                ('death', models.TextField(blank=True, max_length=20, null=True, verbose_name='Deaths')),
                ('recoveries', models.TextField(blank=True, max_length=20, null=True, verbose_name='Recoveries')),
                ('status', models.CharField(blank=True, max_length=255, null=True, verbose_name='Status')),
            ],
            options={
                'db_table': 'CovidStatus',
            },
        ),
    ]
