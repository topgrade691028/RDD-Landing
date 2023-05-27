import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['../../../home/home.component.css', '../sliders/main-slider/main-slider.component.css', 'lectures.component.css']
})
export class LecturesComponent implements OnInit {

  isShow = environment.isVideo;
  constructor() { }

  ngOnInit(): void {
  }

}
