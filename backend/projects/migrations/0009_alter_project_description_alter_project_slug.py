# Generated by Django 4.0.6 on 2023-02-22 21:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0008_alter_project_slug_alter_tag_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='description',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='project',
            name='slug',
            field=models.SlugField(default='', unique=True),
        ),
    ]
