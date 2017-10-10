import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TutorRegistrationComponent } from './tutor-registration/tutor-registration.component';
import { HomepageComponent } from './homepage/homepage.component'

const appRoutes : Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'tutor-registration', component: TutorRegistrationComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TutorRegistrationComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
