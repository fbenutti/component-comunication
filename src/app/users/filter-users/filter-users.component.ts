import { UsersService } from './../../services/users.service';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss']
})
export class FilterUsersComponent implements OnInit, OnDestroy {

  @Input()
  varDoPelps?: string;

  @Input()
  tax?: Number;

  @Output()
  updatedList = new EventEmitter();

  constructor(private usersService: UsersService) { }
  ngOnDestroy(): void {
    console.log("component destroyed");
  }

  ngOnInit(): void {
    const users  = this.usersService.getUsers();
    console.log("From filter users");
    console.log(users);
  }

  updateUsers(){
    const userObj = {userId: 10, userName: 'Felipe Pelps'};
    this.updatedList.emit(userObj);
    //console.log('Clicked on Update Users!');
  }

}
