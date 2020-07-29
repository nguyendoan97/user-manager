import { Component, OnInit } from '@angular/core';
import {Iuser} from './iuser';
import {Igroup} from '../group/igroup';
import {GroupService} from '../group/group.service';
import {UserService} from './user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  title_page = 'Users';
  users: Iuser[] = [];

  groups: Igroup[] = [];
  userFilter =[];
  constructor(private groupService: GroupService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userFilter = this.users;
    this.userFilter = this.userService.getAll();
    this.groups = this.groupService.getAll();
  }

  search(event){
    let keyword = event.target.value;
    this.userFilter = (keyword) ? this.filerByKeyword(keyword): this.userService.getAll();
  }

  filerByKeyword(keyword) {
      return this.userService.getAll().filter(user => {
        return user.name.indexOf(keyword) != -1;
      })
  }

  delete(id:number){
    let userDeleted = [];
    this.userFilter.map(user => {
      if (user.id != id) {
        userDeleted.push(user);
      }
    });
    this.userFilter = userDeleted;
  }

}
