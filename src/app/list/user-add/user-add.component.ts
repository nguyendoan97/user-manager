import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Igroup} from '../group/igroup';
import {UserService} from '../user/user.service';
import {GroupService} from '../group/group.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  addUserForm: FormGroup;
  groups: Igroup[];
  constructor(private fb: FormBuilder,
              private userService:UserService,
              private groupService:GroupService,
              private router:Router) { }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      id: ['',[Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      group_id: ['']
    })
    this.groups = this.groupService.getAll();
  }

  submit() {
    let data = this.addUserForm.value;
    data.group_id = Number(data.group_id);
    this.userService.add(data);
    this.router.navigate([''])
  }

  get name() {
    return this.addUserForm.get('name');
  }

  get email() {
    return this.addUserForm.get('email');
  }

}
