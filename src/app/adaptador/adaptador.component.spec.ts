import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptadorComponent } from './adaptador.component';

describe('AdaptadorComponent', () => {
  let component: AdaptadorComponent;
  let fixture: ComponentFixture<AdaptadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
