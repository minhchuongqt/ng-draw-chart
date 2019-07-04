import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawAxesComponent } from './draw-axes.component';

describe('DrawAxesComponent', () => {
  let component: DrawAxesComponent;
  let fixture: ComponentFixture<DrawAxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawAxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawAxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
