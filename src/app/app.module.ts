import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavComponent} from './menu/nav/nav.component';
import {UserComponent} from './list/user/user.component';
import {InputSearchComponent} from './list/input-search/input-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserComponent,
    InputSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
