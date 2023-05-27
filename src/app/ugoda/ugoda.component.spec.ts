import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgodaComponent } from './ugoda.component';

describe('UgodaComponent', () => {
  let component: UgodaComponent;
  let fixture: ComponentFixture<UgodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgodaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UgodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
