import { Injectable } from '@angular/core';
import {Igroup} from './igroup';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groups: Igroup[] =[
    {
      id:1,
      name: 'C0220I1',
    },
    {
      id:2,
      name: 'C0220H1',
    },
    {
      id:3,
      name: 'C0220G1',
    }
  ]
  constructor() { }

  getAll(): Igroup[] {
    return this.groups;
  }
}
