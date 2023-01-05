import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInquerySectionComponent } from './footer-inquery-section.component';

describe('FooterInquerySectionComponent', () => {
  let component: FooterInquerySectionComponent;
  let fixture: ComponentFixture<FooterInquerySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterInquerySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterInquerySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
