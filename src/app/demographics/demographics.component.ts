import { Component, OnInit } from '@angular/core';
import {InfoService} from '../info.service';
import { ActivatedRoute } from '@angular/router';
import {Demographic} from '../demographic';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.css']
})
export class DemographicsComponent implements OnInit {

  demographics: Demographic[];

  constructor(private service: InfoService) { }

  ngOnInit(): void {
    this.getDemographics();
  }

  getDemographics(): void {

    this.service.getDemographics().subscribe(data => this.demographics = data);
  }

}
