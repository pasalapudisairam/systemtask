import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HostListener } from "@angular/core";





@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public ip = 'http://192.168.1.3:9000';
  public httpOptions: any = {};
  constructor(public http: HttpClient) {
    // this.httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + localStorage.getItem('token')
    //   })
    // };
  }
  createUser(data) {
    return this.http.post(this.ip + '/api/users/createuser', data)
  }
  getUser() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    return this.http.get(this.ip + '/api/users/getemployees', this.httpOptions)
  }
  signIn(data) {
    return this.http.post(this.ip + '/auth/local', data)
  }
  deleteUser(UserId) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    return this.http.post(this.ip + '/api/users/deleteuser', UserId, this.httpOptions)
  }
  editUser(data) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    return this.http.post(this.ip + '/api/users/edituser', data, this.httpOptions)
  }
}
