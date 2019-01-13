import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Assignment10';
  
  /*constructor(private _dataService:DataServiceService){

  }
  employee=this._dataService.getEmployee();*/
  // Call the service method once
  ngOnInit() 
  {
    //this.employee=this._dataService.getEmployee();
  }
}
