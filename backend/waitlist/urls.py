from django.urls import path
from .views import add_to_waitlist

urlpatterns = [
    path('waitlist/', add_to_waitlist),
]