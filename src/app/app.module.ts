import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SenatorsComponent } from './senators/senators.component';
import { MayorsComponent } from './mayors/mayors.component';
import { HousesComponent } from './houses/houses.component';
import { GovernorsComponent } from './governors/governors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    DemographicsComponent,
    SenatorsComponent,
    MayorsComponent,
    HousesComponent,
    GovernorsComponent,
    DashboardComponent,
    AnalyticsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
