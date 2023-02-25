import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(){
    //return this.http.get('https://your-api-endpoint');
    const users = [
      {userId: 231, userName: 'Felipe Pelps'},
      {userId: 7560, userName: 'Fulaão'},
      {userId: 6234, userName: 'Cycleno'},
    ]

    return users;
  }

}

