# Generated by Django 4.0.6 on 2023-03-13 15:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0014_alter_project_votes_average'),
        ('users', '0018_profile_projects'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='projects',
        ),
        migrations.AddField(
            model_name='profile',
            name='projects',
            field=models.ManyToManyField(blank=True, to='projects.project'),
        ),
    ]
