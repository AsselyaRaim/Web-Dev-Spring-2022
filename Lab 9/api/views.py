from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Company, Vacancy

# Create your views here.
def company_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe=False)

def company_details(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(company.to_json())

def vacancy_list_by_company(request, id):
    vacancies = Vacancy.objects.filter(company_id=id)
    vacancies_json = [v.to_json() for v in vacancies]
    if vacancies_json != []:
        return JsonResponse(vacancies_json, safe=False)
    else:
        return JsonResponse({'message': 'Vacancies of this company not found'})

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_details(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)})
    return JsonResponse(vacancy.to_json())

def vacancy_list_topten(request):
    vacancies = Vacancy.objects.order_by("-salary")
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)
