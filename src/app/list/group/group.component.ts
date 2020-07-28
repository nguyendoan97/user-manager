import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  listGroup = [
    {id:1,name:"Nhóm máu A"},
    {id:2,name:"Nhóm máu B"},
    {id:3,name:"Nhóm máu O"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
