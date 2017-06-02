import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from '@angular-mdl/core';

import { AppComponent } from './app.component';
import { routing } from './app.router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    routing
  ],
  providers: [
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
