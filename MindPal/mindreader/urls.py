from django.urls import path
from . import views

urlpatterns = [
	path('', views.homepage, name='homepage'),
	path('quiz_start', views.quiz_start, name='quiz_start'),
	path('quiz', views.quiz, name='quiz'),
	path('feedback',views.feedback, name = 'feedback'),
	path('other', views.other, name = 'other'),
	path('serene',views.serene, name = 'serene'),
]