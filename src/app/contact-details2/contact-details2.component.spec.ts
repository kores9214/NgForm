import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetails2Component } from './contact-details2.component';

describe('ContactDetails2Component', () => {
  let component: ContactDetails2Component;
  let fixture: ComponentFixture<ContactDetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
