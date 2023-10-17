import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondMoodComponent } from './second-mood/second-mood.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondMoodComponent,
    FirstPageComponent,
    ThirdPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, MatButtonToggleModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
