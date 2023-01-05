import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCardsChooseTaglineComponent } from './box-cards-choose-tagline.component';

describe('BoxCardsChooseTaglineComponent', () => {
  let component: BoxCardsChooseTaglineComponent;
  let fixture: ComponentFixture<BoxCardsChooseTaglineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxCardsChooseTaglineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxCardsChooseTaglineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
