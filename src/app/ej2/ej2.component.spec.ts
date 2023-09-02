import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej2Component } from './ej2.component';

describe('Ej2Component', () => {
  let component: Ej2Component;
  let fixture: ComponentFixture<Ej2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ej2Component]
    });
    fixture = TestBed.createComponent(Ej2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
