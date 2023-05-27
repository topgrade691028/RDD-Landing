import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneMenuComponent } from './telephone-menu.component';

describe('TelephoneMenuComponent', () => {
  let component: TelephoneMenuComponent;
  let fixture: ComponentFixture<TelephoneMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoneMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
