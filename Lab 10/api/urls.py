from django.urls import path
from api.views import CompanyListAPIView, CompanyDetailsAPIView,\
    vacancy_details, vacancy_list, vacancy_list_by_company, vacancy_list_topten
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),

    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:pk>/', CompanyDetailsAPIView.as_view()),
    path('companies/<int:id>/vacancies/', vacancy_list_by_company),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:id>/', vacancy_details),
    path('vacancies/top_ten/', vacancy_list_topten),
]
