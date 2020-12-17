import { Component, OnInit } from '@angular/core';
import {InfoService} from '../info.service';
import { ActivatedRoute } from '@angular/router';
import {Demographic} from '../demographic';
import { Person } from '../person';
@Component({
  selector: 'app-mayors',
  templateUrl: './mayors.component.html',
  styleUrls: ['./mayors.component.css']
})
export class MayorsComponent implements OnInit {

  mayors: Person[];

  constructor(private service: InfoService) { }

  ngOnInit(): void {
    this.getSenators();
  }

  getSenators(): void {

    this.service.getRoles("Mayor").subscribe(data => this.mayors = data);

  }

}
