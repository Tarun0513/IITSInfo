import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoreComponent } from './indore.component';

describe('IndoreComponent', () => {
  let component: IndoreComponent;
  let fixture: ComponentFixture<IndoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
