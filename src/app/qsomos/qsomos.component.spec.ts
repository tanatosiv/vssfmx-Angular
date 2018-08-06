import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QsomosComponent } from './qsomos.component';

describe('QsomosComponent', () => {
  let component: QsomosComponent;
  let fixture: ComponentFixture<QsomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QsomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
