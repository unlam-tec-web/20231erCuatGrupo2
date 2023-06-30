import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoValidacionComponent } from './codigo-validacion.component';

describe('CodigoValidacionComponent', () => {
  let component: CodigoValidacionComponent;
  let fixture: ComponentFixture<CodigoValidacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodigoValidacionComponent]
    });
    fixture = TestBed.createComponent(CodigoValidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
