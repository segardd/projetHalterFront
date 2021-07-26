import { Component, OnInit } from '@angular/core';
import { CompetitorsServiceService } from '../services/competitors-service.service';
import { Subscription } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { DAOAPIFactory } from 'src/DAO/DAOAPIFactory';
import { Competitor } from 'src/models/Competitor';

@Component({
  selector: 'app-liste-competitor',
  templateUrl: './liste-competitor.component.html',
  styleUrls: ['./liste-competitor.component.css']
})
export class ListeCompetitorComponent implements OnInit {
  competitors: any;
  error:any ='';
  constructor(private competitorService: CompetitorsServiceService) { }

  async ngOnInit(){
    <Promise<Competitor[]>>this.competitorService.getCompetitorFromAPIalter().then((data:any) =>{
    this.competitors = new Promise((resolve)=>{resolve(data)})})
  
      async function yop(variable:any){
        var result:Competitor[] = await variable.competitorService.getCompetitorFromAPIalter().CompetitorMany
        console.log(result)
      }
      yop(this)
      /*.subscribe(

      (value)=>{
        console.log(value)
        this.competitors = value.data.CompetitorMany;
      },
      (error)=>{
        console.log(error);
        this.error = error;
      },
      ()=>{
        console.log("complete")
      }
      )*/
  }

}
