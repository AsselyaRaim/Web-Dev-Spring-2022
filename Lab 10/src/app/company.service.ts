import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthToken, Company, Vacancy } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = "http://127.0.0.1:8000/"

  constructor(private http: HttpClient) { }

  login(username: String, password: String): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URL}api/login/`, {
      username,
      password
    })
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URL}api/companies`);
  }

  getVacanciesByCompany(id: Number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}api/companies/${id}/vacancies`);
  }
}
