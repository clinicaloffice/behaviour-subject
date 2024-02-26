import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MomComponent } from './mom/mom.component';
import { FirstBornComponent } from './first-born/first-born.component';
import { BabyComponent } from './baby/baby.component';

@NgModule({
  declarations: [
    AppComponent,
    MomComponent,
    FirstBornComponent,
    BabyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
