import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadenaResponsabilidadComponent } from './cadena-responsabilidad.component';

describe('CadenaResponsabilidadComponent', () => {
  let component: CadenaResponsabilidadComponent;
  let fixture: ComponentFixture<CadenaResponsabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadenaResponsabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadenaResponsabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
