import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHelpSectionComponent } from './footer-help-section.component';

describe('FooterHelpSectionComponent', () => {
  let component: FooterHelpSectionComponent;
  let fixture: ComponentFixture<FooterHelpSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterHelpSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterHelpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
