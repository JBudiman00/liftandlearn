from rest_framework import generics
from django.http import HttpResponse, JsonResponse
from .models import Course
from .serializers import CourseSerializer
from .text import getBlockJSON
import json

class CourseListCreateView(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    
    def get(self, request, *args, **kwargs):
        title = request.GET.get('title')
        block_size = int(request.GET.get('blocksize'))
        pageContents = getBlockJSON(title, block_size)
        return HttpResponse(JsonResponse(pageContents), content_type="application/json")