import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TutorRegisterComponent } from './tutor-reg/tutor-register/tutor-register.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorRegisterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
