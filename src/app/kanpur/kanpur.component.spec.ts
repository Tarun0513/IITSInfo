import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanpurComponent } from './kanpur.component';

describe('KanpurComponent', () => {
  let component: KanpurComponent;
  let fixture: ComponentFixture<KanpurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanpurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanpurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
