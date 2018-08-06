import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeVoluntarioComponent } from './se-voluntario.component';

describe('SeVoluntarioComponent', () => {
  let component: SeVoluntarioComponent;
  let fixture: ComponentFixture<SeVoluntarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeVoluntarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
