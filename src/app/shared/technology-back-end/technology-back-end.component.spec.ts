import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyBackEndComponent } from './technology-back-end.component';

describe('TechnologyBackEndComponent', () => {
  let component: TechnologyBackEndComponent;
  let fixture: ComponentFixture<TechnologyBackEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyBackEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyBackEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
