import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerRegistrationComponent } from './costumer-registration.component';

describe('CostumerRegistrationComponent', () => {
  let component: CostumerRegistrationComponent;
  let fixture: ComponentFixture<CostumerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumerRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostumerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
