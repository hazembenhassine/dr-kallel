import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicActivityComponent } from './academic-activity.component';

describe('AcademicActivityComponent', () => {
  let component: AcademicActivityComponent;
  let fixture: ComponentFixture<AcademicActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
