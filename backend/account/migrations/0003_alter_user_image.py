# Generated by Django 4.2.9 on 2024-01-03 15:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_alter_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='image',
            field=models.ImageField(default='avatar.png', upload_to='profile_images'),
        ),
    ]