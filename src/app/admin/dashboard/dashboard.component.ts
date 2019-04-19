import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  full = {
    a: false,
    b: false,
    c: false,
    d: false
  }
  constructor() { }

  ngOnInit() {
  }

}
