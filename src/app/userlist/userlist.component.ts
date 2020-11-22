import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../others/employee.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  employeeArray = [];
  initial = 0;
  pageLimit = 10;
  end = this.initial + this.pageLimit;
  page = 1;


  constructor(private emp: EmployeeService) {}

  ngOnInit(): void {
    this.employeeArray = this.emp.employeeArray;
  }

  view(index: number): void {
    console.log('view EMployee : ' + index);
    this.emp.selectedemployee = index;
  }
  setpage(page: number) {
    this.page = page;
    this.initial = (page - 1) * this.pageLimit;
    this.end = this.initial + this.pageLimit;
  }

}
