# Generated by Django 4.0.6 on 2023-02-05 18:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_profile_slug'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='intro',
        ),
        migrations.AddField(
            model_name='profile',
            name='second_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='slug',
            field=models.SlugField(default='none', unique=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='username',
            field=models.CharField(blank=True, default=None, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='skill',
            name='slug',
            field=models.SlugField(default='djangodbmodelsfieldscharfield', unique=True),
        ),
    ]
