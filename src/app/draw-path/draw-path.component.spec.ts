import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawPathComponent } from './draw-path.component';

describe('DrawPathComponent', () => {
  let component: DrawPathComponent;
  let fixture: ComponentFixture<DrawPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
