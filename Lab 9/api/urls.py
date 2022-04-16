from django.contrib import admin
from django.urls import path
from api.views import company_list, company_details,\
    vacancy_details, vacancy_list, vacancy_list_by_company, vacancy_list_topten

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:id>/', company_details),
    path('companies/<int:id>/vacancies/', vacancy_list_by_company),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:id>/', vacancy_details),
    path('vacancies/top_ten/', vacancy_list_topten),
]
