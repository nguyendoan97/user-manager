import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Igroup} from '../group/igroup';
import {Iuser} from '../user/iuser';
import {UserService} from '../user/user.service';
import {GroupService} from '../group/group.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  editUserForm: FormGroup;
  groups: Igroup[];
  id:number;
  user: Iuser;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private groupService: GroupService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      const id = paramMap.get('id');
      this.id= +id;
      this.user=this.getUser(id);
      console.log(this.user);
    })
  }

  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      id: [this.user.id,[Validators.required]],
      name: [this.user.name, [Validators.required, Validators.minLength(4)]],
      email: [this.user.email, [Validators.required, Validators.email]],
      group_id: [this.user.group_id]
    })
    this.groups = this.groupService.getAll();
  }

  submit() {
    let data = this.editUserForm.value;
    data.group_id = Number(data.group_id);
    this.userService.add(data);
    this.router.navigate(['users'])
    console.log(this.userService.getAll())
  }


  getUser(id): Iuser{
    for(let user of this.userService.getAll()){
      if(user.id==id){
        return user;
      }
    }
  }


  get name() {
    return this.editUserForm.get('name');
  }

  get email() {
    return this.editUserForm.get('email');
  }

}
