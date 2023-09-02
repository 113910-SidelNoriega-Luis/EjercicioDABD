import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej3Component } from './ej3.component';

describe('Ej3Component', () => {
  let component: Ej3Component;
  let fixture: ComponentFixture<Ej3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ej3Component]
    });
    fixture = TestBed.createComponent(Ej3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
