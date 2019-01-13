import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details1',
  templateUrl: './contact-details1.component.html',
  styleUrls: ['./contact-details1.component.css']
})
export class ContactDetails1Component implements OnInit {

  public batches=['Pre-Placement Activity','Logic Building','Angular','Python','Industrial Project Developent'];
  
  constructor() { }

  ngOnInit() {
  }

}
