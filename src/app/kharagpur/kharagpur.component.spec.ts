import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KharagpurComponent } from './kharagpur.component';

describe('KharagpurComponent', () => {
  let component: KharagpurComponent;
  let fixture: ComponentFixture<KharagpurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KharagpurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KharagpurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
