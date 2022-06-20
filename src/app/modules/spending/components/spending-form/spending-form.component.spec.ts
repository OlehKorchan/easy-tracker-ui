import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingFormComponent } from './spending-form.component';

describe('SpendingFormComponent', () => {
	let component: SpendingFormComponent;
	let fixture: ComponentFixture<SpendingFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ SpendingFormComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SpendingFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
