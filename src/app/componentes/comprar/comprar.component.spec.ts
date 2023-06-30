import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarComponent } from './comprar.component';

describe('ComprarComponent', () => {
  let component: ComprarComponent;
  let fixture: ComponentFixture<ComprarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprarComponent]
    });
    fixture = TestBed.createComponent(ComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
