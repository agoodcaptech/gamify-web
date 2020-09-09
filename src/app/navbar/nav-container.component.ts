import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-container',
  templateUrl: './nav-container.component.html',
  styleUrls: ['./nav-container.component.css']
})
export class NavContainer {

  username = sessionStorage.getItem('username');

  constructor() { }

}
