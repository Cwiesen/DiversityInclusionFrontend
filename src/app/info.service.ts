import { Injectable } from '@angular/core';
import {Person} from './person';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

}
