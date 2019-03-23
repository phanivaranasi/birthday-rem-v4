import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaybdayComponent } from './todaybday.component';

describe('TodaybdayComponent', () => {
  let component: TodaybdayComponent;
  let fixture: ComponentFixture<TodaybdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaybdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaybdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
