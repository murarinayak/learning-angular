import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultViewComponent } from './part1/default-view/default-view.component';
import { OthersModule } from './others/others.module';

@NgModule({
  declarations: [
    AppComponent,
    DefaultViewComponent
  ],
  imports: [
    BrowserModule,
    OthersModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
