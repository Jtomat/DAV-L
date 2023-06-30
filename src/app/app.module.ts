import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicDataViewComponent } from './data-view/basic-data-view/basic-data-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicDataViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
