import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologySidebarComponent } from './technology-sidebar.component';

describe('TechnologySidebarComponent', () => {
  let component: TechnologySidebarComponent;
  let fixture: ComponentFixture<TechnologySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologySidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
