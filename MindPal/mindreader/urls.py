from django.urls import path
from . import views

urlpatterns = [
	path('', views.quiz_start, name='quiz_start'),
	path('quiz', views.quiz, name='quiz'),
]