import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarEmailComponent } from './ingresar-email.component';

describe('IngresarEmailComponent', () => {
  let component: IngresarEmailComponent;
  let fixture: ComponentFixture<IngresarEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarEmailComponent]
    });
    fixture = TestBed.createComponent(IngresarEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
