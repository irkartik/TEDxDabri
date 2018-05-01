from django.db import models

# Create your models here.

class query_users(models.Model):
	name = models.CharField(max_length=100)
	email = models.CharField(max_length=100)
	mob = models.CharField(max_length=100)
	query = models.TextField()

	def __str__(self):
		return self.name