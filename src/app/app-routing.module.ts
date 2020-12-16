import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import {PreloadService} from './preload.service';
import {DemographicsComponent} from './demographics/demographics.component';

const routes: Routes = [
  { path: 'persons', component: PersonsComponent, 
  resolve: { people: PreloadService}
},
  { path: 'demographics', component: DemographicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }