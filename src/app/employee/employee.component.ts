import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public departments=["marketing","IT","mechanical","E&TC"];

  empObj=new Employee('shiv','kore','IT');
  
  /*constructor(private _dataService:DataServiceService) { 

  }*/

  ngOnInit() {
    //this._dataService=new DataServiceService(this.empObj);
  }  
  
}
