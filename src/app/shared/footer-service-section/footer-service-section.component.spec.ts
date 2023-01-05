import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterServiceSectionComponent } from './footer-service-section.component';

describe('FooterServiceSectionComponent', () => {
  let component: FooterServiceSectionComponent;
  let fixture: ComponentFixture<FooterServiceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterServiceSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterServiceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
