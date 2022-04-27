import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent implements OnInit {

  vacancies!: Vacancy[];

  constructor(private route: ActivatedRoute,
              private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        this.companyService.getVacanciesByCompany(+id).subscribe((vacancies) => {
          this.vacancies = vacancies;
          console.log(vacancies);
        })
      }
    })
  }

}
