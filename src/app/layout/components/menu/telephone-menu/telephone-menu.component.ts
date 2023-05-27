import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telephone-menu',
  templateUrl: './telephone-menu.component.html',
  styleUrls: ['./telephone-menu.component.css', '../../header/header.component.css']
})
export class TelephoneMenuComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  route() {
    let url = this.router.url.replace('/menu/%2F', '/');
    console.log(url);
    this.router.navigate([url]);
  }
}
