import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingtondcComponent } from './washingtondc.component';

describe('WashingtondcComponent', () => {
  let component: WashingtondcComponent;
  let fixture: ComponentFixture<WashingtondcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashingtondcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingtondcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
