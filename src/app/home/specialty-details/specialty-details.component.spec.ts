import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyDetailsComponent } from './specialty-details.component';

describe('SpecialtyDetailsComponent', () => {
  let component: SpecialtyDetailsComponent;
  let fixture: ComponentFixture<SpecialtyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
