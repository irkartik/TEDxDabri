from django.shortcuts import render
from .models import query_users
from django.http import HttpResponse
from django.core.mail import send_mail
# Create your views here.

def home(request):
	context = {}
	return render(request, 'coming_soon/coming_soon.html', context)


def contact(request):
	name = request.POST.get('name')
	email = request.POST.get('email')
	mobile = request.POST.get('mobnum')
	query = request.POST.get('query')

	message = "Name: " + name + "\n" + "Email: " + email + "\n" + "Mobile: " + mobile + "\n" + "Message: " + query
	subject = "Query from: " + name
	
	temp = query_users.objects.create(name=name, email=email, mob=mobile, query=query)
	
	send_mail(subject, message, 'tedxdabri@gmail.com', ['tedxdabri@gmail.com'], fail_silently=False)

	return render(request, 'coming_soon/coming_soon.html', {'message': 'Query Submitted'})