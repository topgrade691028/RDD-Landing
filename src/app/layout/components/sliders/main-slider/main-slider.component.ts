import { Component, OnInit } from '@angular/core';
import {HomeComponent} from "../../../../home/home.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(s: string) {
    this.router.navigate([s]);
  }
}
