import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContraseniaComponent } from './recuperar-contrasenia.component';

describe('RecuperarContraseniaComponent', () => {
  let component: RecuperarContraseniaComponent;
  let fixture: ComponentFixture<RecuperarContraseniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarContraseniaComponent]
    });
    fixture = TestBed.createComponent(RecuperarContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
