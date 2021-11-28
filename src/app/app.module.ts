import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInModule } from './sign-in/sign-in.module';
import { ChartsModule } from 'ng2-charts';
import { MapboxComponent } from './mapbox/mapbox.component';

@NgModule({
  declarations: [
    AppComponent,
    MapboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SignInModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, MapboxComponent]
})
export class AppModule { }
