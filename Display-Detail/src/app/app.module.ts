import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { DisplayDetailsContentComponent } from './display-details-content/display-details-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDetailsComponent,
    DisplayDetailsContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
