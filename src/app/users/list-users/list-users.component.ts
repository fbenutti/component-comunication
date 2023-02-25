import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  cName = 'Felipe Fodaum';
  taxVal = 2000;
  user = {};
  listUsers = {};

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.listUsers = this.userService.getUsers();
    console.log(this.listUsers)
  }

  captureUsers(event: any){
    this.user = event;
    console.log(event)
  }

}
