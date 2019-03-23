import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeGreetComponent } from './compose-greet.component';

describe('ComposeGreetComponent', () => {
  let component: ComposeGreetComponent;
  let fixture: ComponentFixture<ComposeGreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeGreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeGreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
