# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Speaker, SocialContact, Text, PreHypeEvent

# Create your views here.

def homeview(request):
	context = {
		'speakers' : Speaker.objects.all(),
		'socials': SocialContact.objects.all(),
		'text': Text.objects.first(),
		'prehype': PreHypeEvent.objects.all(),
	}
	print(Text.objects.first())

	return render(request, 'core/home.html', context)