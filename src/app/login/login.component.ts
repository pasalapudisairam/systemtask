import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: any = {};
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(public service: ServiceService, public router: Router) {
  }


  ngOnInit() {
  }

  submitData() {
    this.service.signIn(this.loginForm.value).subscribe(response => {
      if (response['token']) {
        localStorage.setItem('token', response['token']);
        this.router.navigate(['/employee']);
      }
    });
  }

  get uname() {
    return this.loginForm.get('name');
  }

  get pwd() {
    return this.loginForm.get('password');
  }

}
