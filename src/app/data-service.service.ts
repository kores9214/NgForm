import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  employee:Employee;

  constructor(empObj:Employee) { 
    this.employee=empObj;
  }

  public getEmployee(){
    return this.employee;
  }
}
