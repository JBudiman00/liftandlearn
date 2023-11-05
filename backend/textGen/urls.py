from django.urls import path
from .views import CourseListCreateView, TestCreateView

urlpatterns = [
    path('', CourseListCreateView.as_view(), name="course-list-create")
]