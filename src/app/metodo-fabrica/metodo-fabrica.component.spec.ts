import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MetodoFabricaComponent } from "./metodo-fabrica.component";

describe("MetodoFabricaComponent", () => {
  let component: MetodoFabricaComponent;
  let fixture: ComponentFixture<MetodoFabricaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodoFabricaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodoFabricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
