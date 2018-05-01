# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import *
# Register your models here.


admin.site.register(Speaker)
admin.site.register(Text)
admin.site.register(SocialContact)
admin.site.register(PreHypeEvent)
