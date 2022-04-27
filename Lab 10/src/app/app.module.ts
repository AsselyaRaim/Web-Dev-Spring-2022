import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './AuthInterceptor';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompanyVacanciesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: CompaniesComponent},
      {path: 'companies/:id/vacancies', component: CompanyVacanciesComponent},
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
