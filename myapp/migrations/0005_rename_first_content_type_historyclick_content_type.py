# Generated by Django 3.2.13 on 2023-05-07 02:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0004_historyclick'),
    ]

    operations = [
        migrations.RenameField(
            model_name='historyclick',
            old_name='first_content_type',
            new_name='content_type',
        ),
    ]
