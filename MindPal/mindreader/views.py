from django.shortcuts import render

# Create your views here.
def quiz(request):
	return render(request,'quiz.html', {})

def quiz_start(request):
	return render(request, 'start.html',{})

def homepage(request):
	return render(request, 'Mindpal.html',{})

def feedback(request):
	return render(request, 'feedback.html',{})

def other(request):
	return render(request, 'other.html',{})