import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from './person';
import {InfoService} from './info.service';

@Injectable({
  providedIn: 'root'
})
export class PreloadService implements Resolve<Person[]> {

  constructor(private service: InfoService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person[]> {
    
    return this.service.getHeroes();
  }
}


