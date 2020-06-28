import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricaAbstractaComponent } from './fabrica-abstracta.component';

describe('FabricaAbstractaComponent', () => {
  let component: FabricaAbstractaComponent;
  let fixture: ComponentFixture<FabricaAbstractaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricaAbstractaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricaAbstractaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
