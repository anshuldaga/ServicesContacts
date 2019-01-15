import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechAddPage } from './tech-add.page';

describe('TechAddPage', () => {
  let component: TechAddPage;
  let fixture: ComponentFixture<TechAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
