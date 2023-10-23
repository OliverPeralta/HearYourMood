import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondMoodComponent } from './second-mood/second-mood.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { MoreOptionsComponent } from './more-options/more-options.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SecondMoodComponent,
    FirstPageComponent,
    ThirdPageComponent,
    MoreOptionsComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonToggleModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
