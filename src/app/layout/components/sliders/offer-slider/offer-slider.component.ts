import {Component, HostListener, OnInit} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-offer-slider',
  templateUrl: './offer-slider.component.html',
  styleUrls: ['../../../../home/home.component.css', 'offer-slider.component.css']
})
export class OfferSliderComponent implements OnInit {

  constructor(public router: Router) { }
  isShow = environment.isLicense;

  public innerWidth: any;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.changeTxt();
    if(this.isShow)
      this.setSlider();
  }

  id: number = 2;
  resized: boolean = false;

  setSlider(){
    if(innerWidth <= 1200) {
      for (let i = 0; i < 2; i++)
      {
        var element = document.getElementById('offer-' + i.toString());
        // @ts-ignore
        element.style.display = 'none';
      }
      var elements = document.getElementsByClassName('o-dot');
      var elms = Array.prototype.filter.call(elements, function (e){return e})
      for(var e of elms)
      {
        e.style.display = 'inline-block';
      }
    }
  }

  removeSlider()
  {
    if(innerWidth > 1200) {
      for (let i = 0; i < 3; i++)
      {
        var element = document.getElementById('offer-' + i.toString());
        // @ts-ignore
        element.style.display = 'inline-block';
      }
      var elements = document.getElementsByClassName('o-dot');
      var elms = Array.prototype.filter.call(elements, function (e){return e})
      for(var e of elms)
      {
        e.style.display = 'none';
      }
    }
  }

  changeTxt(){
    if(this.id == 2)
    {
      if(innerWidth <= 1200) {
        for (let i = 1; i < 5; i++) {
          var element = document.getElementById('btn-' + i.toString());
          // @ts-ignore
          element.style.transition = 'none';
          // @ts-ignore
          element.style.fontSize = '14px';
          // @ts-ignore
          var category = element.textContent.replace("Категорія ", "");
          if (i != this.id) {
            // @ts-ignore
            element.textContent = category;
            // @ts-ignore
            element.style.width = '15%';
          } else {
            // @ts-ignore
            element.textContent = "Категорія " + category;
            // @ts-ignore
            element.style.width = '55%';
          }
        }
      }
    }
    else {
      let elem = document.getElementById('not');
      // @ts-ignore
      elem.style.opacity = '1';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(this.isShow) {
      this.innerWidth = window.innerWidth;
      if (innerWidth <= 1200 && !this.resized) {
        this.setSlider();
        this.changeTxt();
        this.resized = true;
      } else if (this.resized && innerWidth > 1200) {
        this.removeSlider();
        for (let i = 1; i < 5; i++) {
          var element = document.getElementById('btn-' + i.toString());
          // @ts-ignore
          element.style.fontSize = '14px';
          // @ts-ignore
          var category = element.textContent.replace("Категорія ", "");
          // @ts-ignore
          element.textContent = "Категорія " + category;
          this.resized = false;
          // @ts-ignore
          element.style.width = '25%';
          // @ts-ignore
          element.style.transition = '0.3s';
        }
      }
    }
  }

  redirect() {
    location.href = 'https://romdomdom.in.ua/start-learning/choose-city';
  }
}
