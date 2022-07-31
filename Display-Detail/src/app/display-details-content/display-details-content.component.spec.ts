import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailsContentComponent } from './display-details-content.component';

describe('DisplayDetailsContentComponent', () => {
  let component: DisplayDetailsContentComponent;
  let fixture: ComponentFixture<DisplayDetailsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailsContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
