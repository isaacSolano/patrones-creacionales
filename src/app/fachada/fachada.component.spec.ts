import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FachadaComponent } from "./fachada.component";

describe("FachadaComponent", () => {
  let component: FachadaComponent;
  let fixture: ComponentFixture<FachadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FachadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FachadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
