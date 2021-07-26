import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCompetitorComponent } from './liste-competitor.component';

describe('ListeCompetitorComponent', () => {
  let component: ListeCompetitorComponent;
  let fixture: ComponentFixture<ListeCompetitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCompetitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCompetitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
