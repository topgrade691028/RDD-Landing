import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private rout: string | undefined;

  constructor(private router: Router) {}


  ngOnInit(): void {
    this.rout = this.router.url;
    console.log(this.rout);
  }

  route() {
    this.router.navigate(['menu',this.rout]);
  }
}
