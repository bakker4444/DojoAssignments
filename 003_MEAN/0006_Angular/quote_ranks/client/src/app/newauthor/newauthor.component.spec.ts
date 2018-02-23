import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewauthorComponent } from './newauthor.component';

describe('NewauthorComponent', () => {
  let component: NewauthorComponent;
  let fixture: ComponentFixture<NewauthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewauthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
