import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListPagePage } from './contact-list-page.page';

describe('ContactListPagePage', () => {
  let component: ContactListPagePage;
  let fixture: ComponentFixture<ContactListPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
