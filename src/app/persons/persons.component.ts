import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {InfoService} from '../info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  people: Person[];

  constructor(private activatedRoute: ActivatedRoute,
    private service: InfoService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { people: Person[] }) => {

      this.people = data.people;

    })
    //this.getPeople();
    
  }

  getPeople() : void {

    this.service.getHeroes().subscribe(all =>  {
      this.people = all
      
    });
  }
  

}
