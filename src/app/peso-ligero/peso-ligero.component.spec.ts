import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoLigeroComponent } from './peso-ligero.component';

describe('PesoLigeroComponent', () => {
  let component: PesoLigeroComponent;
  let fixture: ComponentFixture<PesoLigeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesoLigeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesoLigeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
