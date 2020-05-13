import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoorkeeComponent } from './roorkee.component';

describe('RoorkeeComponent', () => {
  let component: RoorkeeComponent;
  let fixture: ComponentFixture<RoorkeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoorkeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoorkeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
