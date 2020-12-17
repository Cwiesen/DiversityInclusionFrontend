import { Component, OnInit } from '@angular/core';
import {InfoService} from '../info.service';
import { ActivatedRoute } from '@angular/router';
import {Demographic} from '../demographic';
import { Person } from '../person';

@Component({
  selector: 'app-senators',
  templateUrl: './senators.component.html',
  styleUrls: ['./senators.component.css']
})
export class SenatorsComponent implements OnInit {

  senators: Person[];

  constructor(private service: InfoService) { }

  ngOnInit(): void {
    this.getSenators();
  }

  getSenators(): void {

    this.service.getRoles("Senator").subscribe(data => this.senators = data);

  }

}
