import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import {PreloadService} from './preload.service';

const routes: Routes = [
  { path: 'persons', component: PersonsComponent, 
  resolve: { people: PreloadService}
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }