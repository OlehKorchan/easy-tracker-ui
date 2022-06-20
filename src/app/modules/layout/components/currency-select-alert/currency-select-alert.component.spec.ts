import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySelectAlertComponent } from './currency-select-alert.component';

describe('CurrencySelectAlertComponent', () => {
	let component: CurrencySelectAlertComponent;
	let fixture: ComponentFixture<CurrencySelectAlertComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ CurrencySelectAlertComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CurrencySelectAlertComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
