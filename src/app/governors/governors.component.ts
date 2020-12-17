import { Component, OnInit } from '@angular/core';
import {InfoService} from '../info.service';
import { ActivatedRoute } from '@angular/router';
import {Demographic} from '../demographic';
import { Person } from '../person';

@Component({
  selector: 'app-governors',
  templateUrl: './governors.component.html',
  styleUrls: ['./governors.component.css']
})
export class GovernorsComponent implements OnInit {

  governors: Person[];

  constructor(private service: InfoService) { }

  ngOnInit(): void {
    this.getSenators();
  }

  getSenators(): void {

    this.service.getRoles("Governor").subscribe(data => this.governors = data);

  }

}
