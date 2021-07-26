import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCompetitorComponent } from './detail-competitor.component';

describe('DetailCompetitorComponent', () => {
  let component: DetailCompetitorComponent;
  let fixture: ComponentFixture<DetailCompetitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCompetitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCompetitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
