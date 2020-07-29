import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavComponent} from './menu/nav/nav.component';
import {UserComponent} from './list/user/user.component';
import {InputSearchComponent} from './list/input-search/input-search.component';
import {GroupComponent} from './list/group/group.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserAddComponent} from './list/user-add/user-add.component';
import { UserEditComponent } from './list/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserComponent,
    InputSearchComponent,
    GroupComponent,
    UserAddComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
