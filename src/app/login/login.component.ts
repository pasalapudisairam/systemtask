import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: any = {};

  constructor(public service: ServiceService, public router: Router) { }


  ngOnInit() {
  }
  submitData() {
    this.service.signIn(this.user).subscribe(response => {
      if (response['token']) {
        localStorage.setItem('token', response['token'])
        this.router.navigate(['/employee'])
      }
    })
  }
}
