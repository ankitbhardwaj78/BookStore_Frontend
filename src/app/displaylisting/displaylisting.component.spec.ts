import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaylistingComponent } from './displaylisting.component';

describe('DisplaylistingComponent', () => {
  let component: DisplaylistingComponent;
  let fixture: ComponentFixture<DisplaylistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaylistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaylistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
