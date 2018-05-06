import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckWindowComponent } from './check-window.component';

describe('CheckWindowComponent', () => {
  let component: CheckWindowComponent;
  let fixture: ComponentFixture<CheckWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
