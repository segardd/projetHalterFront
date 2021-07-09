import { Component, OnInit } from '@angular/core';
import { Competitor } from '../models/Competitor';
import { CompetitorsServiceService } from '../services/competitors-service.service';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.css']
})
export class MonPremierComponent implements OnInit {
  allCompetitors: Competitor[]=[];
  constructor(private competitorService: CompetitorsServiceService) { }

  ngOnInit(): void {
    this.allCompetitors = this.competitorService.allCompetitors;

  }

}
