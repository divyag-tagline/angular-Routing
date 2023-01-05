import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalAddressComponent } from './global-address.component';

describe('GlobalAddressComponent', () => {
  let component: GlobalAddressComponent;
  let fixture: ComponentFixture<GlobalAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
