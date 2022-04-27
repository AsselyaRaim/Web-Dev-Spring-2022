import json

from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Company, Vacancy

from api.serializers import companySerializer, vacancySerializer
from django.views.decorators.csrf import csrf_exempt

from rest_framework.decorators import api_view, permission_classes
from rest_framework.request import Request
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated

# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def vacancy_list_by_company(request, id):
    vacancies = Vacancy.objects.filter(company_id=id)
    if len(vacancies) > 0:
        serializer = vacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    else:
        return Response({'message': 'Vacancies of this company not found'})

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated,])
def vacancy_list(request):
    permission_classes = (IsAuthenticated,)
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        serializer = vacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = vacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated,])
def vacancy_details(request, id):
    permission_classes = (IsAuthenticated,)
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return Response({'message': str(e)})

    if request.method == "GET":
        serializer = vacancySerializer(vacancy)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = vacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == "DELETE":
        vacancy.delete()
        return Response({'message': 'deleted'}, status=204)

@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def vacancy_list_topten(request):
    permission_classes = (IsAuthenticated,)
    vacancies = Vacancy.objects.order_by("-salary")
    serializer = vacancySerializer(vacancies, many=True)
    return Response(serializer.data)