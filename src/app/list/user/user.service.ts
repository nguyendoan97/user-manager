import { Injectable } from '@angular/core';
import {Iuser} from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:Iuser[] = [
    {
      id: 1,
      name: 'Tuấn',
      email: 'tuan@gmail.com',
      group_id: 1
    },
    {
      id: 2,
      name: 'vinh',
      email: 'vinh@gmail.com',
      group_id: 2
    },
    {
      id: 4,
      name: 'duc',
      email: 'duc@gmail.com',
      group_id: 3
    }
  ];

  constructor() { }

  getAll():Iuser[]{
      return this.users;
  }

  add(user: Iuser){
    this.users.push(user);
  }
}
