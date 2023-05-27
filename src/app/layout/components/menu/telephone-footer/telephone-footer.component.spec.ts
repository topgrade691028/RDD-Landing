import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneFooterComponent } from './telephone-footer.component';

describe('TelephoneFooterComponent', () => {
  let component: TelephoneFooterComponent;
  let fixture: ComponentFixture<TelephoneFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoneFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
