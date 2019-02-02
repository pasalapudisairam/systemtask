import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: any = {};
  constructor(public service: ServiceService, public router: Router) { }

  ngOnInit() {

  }
  submitData() {
    this.service.createUser(this.user).subscribe(response => {
      if (response['token']) {
        localStorage.setItem('token', response['token'])
        this.router.navigate(['/admin'])
      }
    })
  }
}
