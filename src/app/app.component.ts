import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sample';
  tempDate: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    let date = Date.now();
    if ((date - this.tempDate) > 180000) {
      this.logout();
    }
    else {
      this.tempDate = date;
    }
  }
  constructor(public router: Router) { }
  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/']);
    }
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  login() {
    this.router.navigate(['/login']);
  }

}
