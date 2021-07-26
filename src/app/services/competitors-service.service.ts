import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competitor } from '../../models/Competitor';
import { HttpClient } from '@angular/common/http';
import { Apollo, ApolloBase, gql } from 'apollo-angular';
import { DAOAPIFactory } from 'src/DAO/DAOAPIFactory';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CompetitorsServiceService {

  constructor(private apollo: Apollo) {
  }

  getCompetitorFromAPI(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: gql`{
        CompetitorMany{
        name
        firstname
        birthday
        clubInfo{
          name
        }
        }
      }`,
    }).valueChanges
  }

  getCompetitorFromAPIalter(): Promise<void | Competitor[]> {
    return DAOAPIFactory.getInstance().getCompetitorDAO().findall([
      '_id',
      'name',
      'firstname'
    ],Competitor)
  }
}
