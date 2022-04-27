from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=100, null=True)
    description = models.TextField(max_length=300, null=True)
    city = models.CharField(max_length=100, null=True)
    address = models.TextField(max_length=300, null=True)

    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=100, null=True)
    description = models.TextField(max_length=300, null=True)
    salary = models.FloatField(null=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True)
    is_active = models.BooleanField(default=True)

    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company_id': self.company_id,
            'is_active': self.is_active
        }