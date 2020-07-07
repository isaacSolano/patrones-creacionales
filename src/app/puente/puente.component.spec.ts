import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuenteComponent } from './puente.component';

describe('PuenteComponent', () => {
  let component: PuenteComponent;
  let fixture: ComponentFixture<PuenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
