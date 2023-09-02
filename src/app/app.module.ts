import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ej2Component } from './ej2/ej2.component';
import { Ej3Component } from './ej3/ej3.component';
import { Ej4Component } from './ej4/ej4.component';
import { Ej5Component } from './ej5/ej5.component';

@NgModule({
  declarations: [
    AppComponent,
    Ej2Component,
    Ej3Component,
    Ej4Component,
    Ej5Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
