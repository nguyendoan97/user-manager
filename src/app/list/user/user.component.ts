import { Component, OnInit } from '@angular/core';
import {Iuser} from '../iuser';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  title_page = 'Users';
  users: Iuser[] = [
    {
      id: 1,
      name: 'nam',
      email: 'nam@gmail.com'
    },
    {
      id: 2,
      name: 'vinh',
      email: 'vinh@gmail.com'
    },
    {
      id: 3,
      name: 'duc',
      email: 'duc@gmail.com'
    }
  ]

  userFilter =[];
  constructor() { }

  ngOnInit(): void {
    this.userFilter = this.users
  }

  search(event){
    let keyword = event.target.value;
    this.userFilter = (keyword) ? this.filerByKeyword(keyword): this.users;
  }

  filerByKeyword(keyword) {
    return this.users.filter(user => {
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
