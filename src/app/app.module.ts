import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';

import { CompetitorsServiceService } from './services/competitors-service.service';
import { ListeCompetitorComponent } from './liste-competitor/liste-competitor.component';
import { ListeClubComponent } from './liste-club/liste-club.component';
import { DetailCompetitorComponent } from './detail-competitor/detail-competitor.component';
import { DetailClubComponent } from './detail-club/detail-club.component';
import { DecisionComponent } from './decision/decision.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    ListeCompetitorComponent,
    ListeClubComponent,
    DetailCompetitorComponent,
    DetailClubComponent,
    DecisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [
    CompetitorsServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
