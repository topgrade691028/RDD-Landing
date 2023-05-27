import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {TelephoneMenuComponent} from "./layout/components/menu/telephone-menu/telephone-menu.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {EducationComponent} from "./education/education.component";
import {PartnersComponent} from "./partners/partners.component";
import {AboutComponent} from "./about/about.component";
import {UseComponent} from "./use/use.component";
import {UgodaComponent} from "./ugoda/ugoda.component";
import {ConfComponent} from "./conf/conf.component";
import {OffertaComponent} from "./offerta/offerta.component";
import {OfferSliderComponent} from "./layout/components/sliders/offer-slider/offer-slider.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'use', component: UseComponent},
  { path: 'ugoda', component: UgodaComponent},
  { path: 'home', component: HomeComponent},
  { path: 'menu/:id', component: TelephoneMenuComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'reviews', component: ReviewsComponent},
  { path: 'education', component: EducationComponent},
  { path: 'partners', component: PartnersComponent},
  { path: 'about', component: AboutComponent},
  { path: 'conf', component: ConfComponent},
  { path: 'offerta', component: OffertaComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
