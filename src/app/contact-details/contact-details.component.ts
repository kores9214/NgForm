import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  public batches=['Pre-Placement Activity','Logic Building','Angular','Python','Industrial Project Development'];
  
  constructor() { }

  ngOnInit() {
  }

}
