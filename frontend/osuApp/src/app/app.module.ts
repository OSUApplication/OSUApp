import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { TutorRegistrationComponent } from './tutor-registration/tutor-registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchTutorComponent } from './search-tutor/search-tutor.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component'

const appRoutes : Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'tutor-registration', component: TutorRegistrationComponent
  },
  {
    path: 'search-tutor', component:SearchTutorComponent
  },
  {
    path: 'sign-up', component:SignUpComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    TutorRegistrationComponent,
    HomepageComponent,
    SearchTutorComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
