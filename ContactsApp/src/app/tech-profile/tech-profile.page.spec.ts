import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechProfilePage } from './tech-profile.page';

describe('TechProfilePage', () => {
  let component: TechProfilePage;
  let fixture: ComponentFixture<TechProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
