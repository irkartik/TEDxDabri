# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Speaker(models.Model):
	name = models.CharField(max_length=100)
	post = models.CharField(max_length=100)
	description = models.TextField()
	image = models.ImageField()
	coming_soon = models.BooleanField()

	def __str__(self):
		return self.name

class SocialContact(models.Model):
	name = models.CharField(max_length=100)
	url = models.CharField(max_length=255)

	def __str__(self):
		return self.name

class Text(models.Model):
	about = models.TextField()
	theme = models.TextField()
	theme_image = models.ImageField()
	

class PreHypeEvent(models.Model):
	name = models.CharField(max_length=1000)
	picture1 = models.ImageField() 
	picture2 = models.ImageField()
	picture3 = models.ImageField()
	picture4 = models.ImageField()
	picture5 = models.ImageField()
	picture6 = models.ImageField()
	picture7 = models.ImageField()
	picture8 = models.ImageField()
	picture9 = models.ImageField()

	def __str__(self):
		return self.name