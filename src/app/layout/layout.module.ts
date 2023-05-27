import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { TelephoneMenuComponent } from './components/menu/telephone-menu/telephone-menu.component';
import { TelephoneFooterComponent } from './components/menu/telephone-footer/telephone-footer.component';
import { MainSliderComponent } from './components/sliders/main-slider/main-slider.component';
import { DriverSliderComponent } from './components/sliders/driver-slider/driver-slider.component';
import { VideoComponent } from './components/video/video.component';
import { LecturesComponent } from './components/lectures/lectures.component';
import { HomeSliderComponent } from './components/sliders/home-slider/home-slider.component';
import { OfferSliderComponent } from './components/sliders/offer-slider/offer-slider.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuComponent, TelephoneMenuComponent, TelephoneFooterComponent, MainSliderComponent, DriverSliderComponent, VideoComponent, LecturesComponent, HomeSliderComponent, OfferSliderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent, FooterComponent, MenuComponent, TelephoneMenuComponent, MainSliderComponent, DriverSliderComponent, VideoComponent, LecturesComponent, HomeSliderComponent, OfferSliderComponent
  ]
})
export class LayoutModule { }
