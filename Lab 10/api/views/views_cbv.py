from rest_framework.views import APIView
from django.shortcuts import Http404
from rest_framework.response import Response
from rest_framework.request import Request

from api.models import Company
from api.serializers import companySerializer

from rest_framework.permissions import IsAuthenticated

class CompanyListAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        companies = Company.objects.all()
        serializer = companySerializer(companies, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = companySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class CompanyDetailsAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    def get_object(self, pk):
        try:
            return Company.objects.get(id=pk)
        except Company.DoesNotExist as e:
            raise Http404

    def get(self, request, pk=None):
        company = self.get_object(pk)
        serializer = companySerializer(company)
        return Response(serializer.data)

    def put(self, request, pk=None):
        company = self.get_object(pk)
        serializer = companySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk=None):
        company = self.get_object(pk)
        company.delete()
        return Response({'message': 'deleted'}, status=204)