import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.minLength(10)]),
    dob: new FormControl('', [Validators.required])
  });

  constructor(public service: ServiceService, public router: Router) {
  }

  ngOnInit() {

  }

  submitData() {
    this.service.createUser(this.signupForm.value).subscribe(response => {
      if (response['token']) {
        localStorage.setItem('token', response['token']);
        this.router.navigate(['/admin']);
      }
    });
  }

  get uname() {
    return this.signupForm.get('name');
  }

  get pwd() {
    return this.signupForm.get('password');
  }

  get address() {
    return this.signupForm.get('address');
  }

  get dob() {
    return this.signupForm.get('dob');
  }

}
