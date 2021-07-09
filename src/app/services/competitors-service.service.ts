import { Injectable } from '@angular/core';
import { Competitor } from '../models/Competitor';

@Injectable({
  providedIn: 'root'
})
export class CompetitorsServiceService {
  allCompetitors: Competitor[] = [];
  constructor() {
    let competitor: Competitor = {
      name: "name",
      firstname: "firsname",
      birthday: new Date(Date.now()),
      club: "SCHAM"
    }
    var person = new Competitor;
    for(var i=0; i < 4; i++){
      person = competitor
      person.setName(person.getName().concat(i.toString()));
      person.setFirstname(person.getFirstname().concat(i.toString()));

      this.allCompetitors.push(person);
      
    }
    this.allCompetitors
   }
}
