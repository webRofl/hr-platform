# Generated by Django 4.0.6 on 2023-02-27 20:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0012_alter_profile_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='email',
            field=models.EmailField(blank=True, default='', max_length=50),
        ),
    ]
