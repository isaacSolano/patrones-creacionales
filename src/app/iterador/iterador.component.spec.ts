import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IteradorComponent } from './iterador.component';

describe('IteradorComponent', () => {
  let component: IteradorComponent;
  let fixture: ComponentFixture<IteradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
