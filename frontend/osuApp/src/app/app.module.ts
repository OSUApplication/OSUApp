import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {DataOpService} from './data-op.service';
import { SessionService } from './session.service';
import { FilterPipe} from './filter.pipe';
import { RegFilterPipe} from './regSelectFilter.pipe';
import {DayPilotModule} from "daypilot-pro-angular";
import {DataService} from './student-calendar/data.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { TutorRegistrationComponent } from './tutor-registration/tutor-registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchTutorComponent } from './search-tutor/search-tutor.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ManageTutorComponent } from './manage-tutor/manage-tutor.component';
import { StudentCalendarComponent } from './student-calendar/student-calendar.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes : Routes = [
  {
    path: 'home', component: HomepageComponent
  },
  {
    path: '', redirectTo:'/login',pathMatch:'full'
  },
  {
    path: 'tutor-registration', component: TutorRegistrationComponent
  },
  {
    path:'search-tutor', component:SearchTutorComponent
  },
  {
    path:'about-us', component:AboutUsComponent
  },
  {
    path:'contact-us', component:ContactUsComponent
  },
  {  path: 'login',  component:LoginComponent
  },
  {
    path:'manageTutor',component:ManageTutorComponent
  },
  {
    path:'student-calendar',component:StudentCalendarComponent
  },
  {
    path:'profile',component:ProfileComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TutorRegistrationComponent,
    HomepageComponent,
    SearchTutorComponent,
    LoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    FilterPipe,
    RegFilterPipe,
    ManageTutorComponent,
    StudentCalendarComponent,
    ProfileComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    HttpClientModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    DayPilotModule,
    NgbModule.forRoot(),
  ],
  exports:[ProfileComponent],
  providers: [DataOpService,SessionService,DataService,ProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
