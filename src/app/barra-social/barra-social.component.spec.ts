import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraSocialComponent } from './barra-social.component';

describe('BarraSocialComponent', () => {
  let component: BarraSocialComponent;
  let fixture: ComponentFixture<BarraSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
