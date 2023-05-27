import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from "./layout/layout.module";
import { AlertModule } from "ngx-bootstrap/alert";
import { ContactsComponent } from './contacts/contacts.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EducationComponent } from './education/education.component';
import { PartnersComponent } from './partners/partners.component';
import { AboutComponent } from './about/about.component';
import { UseComponent } from './use/use.component';
import { UgodaComponent } from './ugoda/ugoda.component';
import { ConfComponent } from './conf/conf.component';
import { OffertaComponent } from './offerta/offerta.component';
import { MobileVersionComponent } from "./shared/dialogs/mobile-version/mobile-version.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSelectModule } from "@angular/material/select";
import { MatDialog, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    ReviewsComponent,
    EducationComponent,
    PartnersComponent,
    AboutComponent,
    UseComponent,
    UgodaComponent,
    ConfComponent,
    OffertaComponent,
    MobileVersionComponent,
    NotFoundComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    LayoutModule,
    AlertModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'isBrowser', useValue: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
