import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSearchPage } from './tech-search.page';

describe('TechSearchPage', () => {
  let component: TechSearchPage;
  let fixture: ComponentFixture<TechSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
