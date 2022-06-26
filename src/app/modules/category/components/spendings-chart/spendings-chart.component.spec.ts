import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingsChartComponent } from './spendings-chart.component';

describe('SpendingsChartComponent', () => {
  let component: SpendingsChartComponent;
  let fixture: ComponentFixture<SpendingsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendingsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendingsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
