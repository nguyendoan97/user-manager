import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './list/user/user.component';
import {UserAddComponent} from './list/user-add/user-add.component';
import {GroupComponent} from './list/group/group.component';
import {UserEditComponent} from './list/user-edit/user-edit.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'add', component: UserAddComponent},
  {path: 'groups', component: GroupComponent},
  {path: 'edit/:id', component: UserEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
