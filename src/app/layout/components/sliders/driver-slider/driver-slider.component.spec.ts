import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSliderComponent } from './driver-slider.component';

describe('DriverSliderComponent', () => {
  let component: DriverSliderComponent;
  let fixture: ComponentFixture<DriverSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
