import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import {PreloadService} from './preload.service';
import {DemographicsComponent} from './demographics/demographics.component';
import {SenatorsComponent} from './senators/senators.component';
import {HousesComponent} from './houses/houses.component';
import {MayorsComponent} from './mayors/mayors.component';
import {GovernorsComponent} from './governors/governors.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [
  { path: 'persons', component: PersonsComponent, 
  resolve: { people: PreloadService}
},
  { path: 'demographics', component: DemographicsComponent},
  { path: 'senators', component: SenatorsComponent},
  { path: 'houses', component: HousesComponent},
  { path: 'mayors', component: MayorsComponent},
  { path: 'governors', component: GovernorsComponent},
  { path: 'analytics', component: AnalyticsComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }