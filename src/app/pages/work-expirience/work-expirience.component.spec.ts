import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpirienceComponent } from './work-expirience.component';

describe('WorkExpirienceComponent', () => {
  let component: WorkExpirienceComponent;
  let fixture: ComponentFixture<WorkExpirienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExpirienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExpirienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
