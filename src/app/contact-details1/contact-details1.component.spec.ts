import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetails1Component } from './contact-details1.component';

describe('ContactDetails1Component', () => {
  let component: ContactDetails1Component;
  let fixture: ComponentFixture<ContactDetails1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetails1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
