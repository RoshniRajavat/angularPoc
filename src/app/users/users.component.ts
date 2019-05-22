import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  usersData:[any];
  bflag=true;
  ngOnInit() {
    this.httpClient.get<[any]>('../assets/users.json').subscribe((data) => {
       this.usersData = data;
      console.log(data);
    })
  }
}
