import { Injectable } from '@angular/core';
import {Person} from './person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Demographic} from './demographic';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private infoUrl = 'https://diversity-back.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Person[]> {
    return this.http.get<Person[]>("https://diversity-back.herokuapp.com/api/people");
  }

  getDemographics(): Observable<Demographic[]> {
    return this.http.get<Demographic[]>("https://diversity-back.herokuapp.com/api/demographics");
  }
  getRoles(role: string): Observable<Person[]> {
    const url = `${this.infoUrl}/role/${role}`;
    return this.http.get<Person[]>(url);
  }

  

}
