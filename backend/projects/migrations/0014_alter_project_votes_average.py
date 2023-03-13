# Generated by Django 4.0.6 on 2023-03-13 14:44

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0013_remove_project_votes_ratio_project_fully_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='votes_average',
            field=models.PositiveSmallIntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)]),
        ),
    ]