import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  userdetails: any = [];
  detailObj: any = {};
  useredit: any = {};
  view = 'forloop';
  constructor(public service: ServiceService, public router: Router) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.service.getUser().subscribe(response => {
      this.userdetails = response;
    })
  }
  userDetailed(data) {
    this.view = 'detailed';
    this.detailObj = data;
  }
  back() {
    this.view = 'forloop';
  }
  delete() {
    let obj: any = {};
    obj.UserId = this.detailObj._id
    this.service.deleteUser(obj).subscribe(response => {
      // this.userdetails = response;
      this.view = 'forloop';
      this.getAll();
    })
  }
  edit() {
    this.view = 'edit';
    this.useredit = this.detailObj;
  }
  EditData() {
    let obj: any = {};
    // obj.UserId = this.detailObj
    this.service.editUser(this.detailObj).subscribe(response => {
      // this.userdetails = response;
      this.view = 'forloop';
      this.getAll();
    })
  }

}
