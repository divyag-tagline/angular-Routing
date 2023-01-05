import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHireDevloperSectionComponent } from './footer-hire-devloper-section.component';

describe('FooterHireDevloperSectionComponent', () => {
  let component: FooterHireDevloperSectionComponent;
  let fixture: ComponentFixture<FooterHireDevloperSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterHireDevloperSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterHireDevloperSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
