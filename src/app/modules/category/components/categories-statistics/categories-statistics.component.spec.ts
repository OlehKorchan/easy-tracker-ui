import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesStatisticsComponent } from './categories-statistics.component';

describe('CategoriesStatisticsComponent', () => {
  let component: CategoriesStatisticsComponent;
  let fixture: ComponentFixture<CategoriesStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesStatisticsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
