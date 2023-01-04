import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyFrontEndComponent } from './technology-front-end.component';

describe('TechnologyFrontEndComponent', () => {
  let component: TechnologyFrontEndComponent;
  let fixture: ComponentFixture<TechnologyFrontEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyFrontEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyFrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
