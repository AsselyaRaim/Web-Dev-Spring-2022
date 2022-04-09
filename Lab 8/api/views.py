from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Product, Category

# Create your views here.
def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def product_details(request, product_id):
    try:
        product = Product.objects.all().get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(product.to_json())

def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def category_details(request, category_id):
    try:
        category = Category.objects.all().get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(category.to_json())

def product_list_by_category(request, category_id):
    products = Product.objects.all().filter(category_id=category_id)
    products_json = [p.to_json() for p in products]
    if products_json != []:
        return JsonResponse(products_json, safe=False)
    else:
        return JsonResponse({'message': 'No products in this category'})