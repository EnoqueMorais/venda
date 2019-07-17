import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarModalPage } from './editar-modal.page';

describe('EditarModalPage', () => {
  let component: EditarModalPage;
  let fixture: ComponentFixture<EditarModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
