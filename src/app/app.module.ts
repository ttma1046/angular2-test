import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AboutComponent } from './about.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports:      [ BrowserModule, SharedModule ],
  declarations: [ AppComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
