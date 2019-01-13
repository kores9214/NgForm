import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-contact-details2',
  templateUrl: './contact-details2.component.html',
  styleUrls: ['./contact-details2.component.css']
})
export class ContactDetails2Component implements OnInit {

  public batches=['Pre-Placement Activity','Logic Building','Angular','Python'];

  userobj = new User('Piyush Manohar Khairnnar','Marvellous@gmail.com',7588945488,'Paytm','Python',true);
  
  constructor() { }

  ngOnInit() {
  }

}
