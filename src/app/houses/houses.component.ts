import { Component, OnInit } from '@angular/core';
import {InfoService} from '../info.service';
import { ActivatedRoute } from '@angular/router';
import {Demographic} from '../demographic';
import { Person } from '../person';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  houses: Person[];

  constructor(private service: InfoService) { }

  ngOnInit(): void {
    this.getSenators();
  }

  getSenators(): void {

    this.service.getRoles("House Representative").subscribe(data => this.houses = data);

  }

}
