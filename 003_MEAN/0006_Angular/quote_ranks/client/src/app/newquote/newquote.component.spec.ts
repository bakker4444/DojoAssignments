import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewquoteComponent } from './newquote.component';

describe('NewquoteComponent', () => {
  let component: NewquoteComponent;
  let fixture: ComponentFixture<NewquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
