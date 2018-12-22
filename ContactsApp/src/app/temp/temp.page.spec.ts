import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempPage } from './temp.page';

describe('TempPage', () => {
  let component: TempPage;
  let fixture: ComponentFixture<TempPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
