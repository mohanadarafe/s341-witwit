import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FollowService } from '../services/follow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css']
})
export class SearchEngineComponent implements OnInit {
  user = {};
  users = [];
  hidden: boolean;
  userData: any;
  list: any;
  followList: any;
  constructor(private route: ActivatedRoute,
              private auth: AuthService,
              private followService: FollowService,
              private router: Router) {
    this.route.params.subscribe(params => {
      this.user['username'] = this.route.snapshot.paramMap.get("p1");
      this.requestUsers(this.user);
    });
  }

  ngOnInit() {
    // this.sendUserToken();
    this.getUser();
  }
  // sendUserToken() {
  //   this.auth.getUserToken().subscribe(
  //     res => {
  //     },
  //     err => {
  //       console.error('error getting token', err);
  //     }
  //   );
  // }

  getUser() {
    this.auth.requestUserData().subscribe(
      res => {
        this.userData = res;
      },
      err => console.error(err)
    );
  }


  followUser(username) {
    const userToken = localStorage.getItem('token');
    const obj = { 'token': userToken , 'username': username };
    this.followService.followUser(obj).subscribe(
      res => {
        console.log(res);
        const userObj = {'username' : username};
        this.requestUsers(userObj);
      },
      err => {
        console.error(err);
      }
    );
  }

  requestUsers(user) {
    const userToken = localStorage.getItem('token');
    const userObj = {'token': userToken, 'username': user.username };
    this.auth.requestUser(userObj).subscribe(
      res => {this.users = res, this.hidden = false;
      console.log(this.users); },
      err => {console.log(err), this.hidden = true; },
      () => {console.log('The search has been completed'); },
    );
  }
}


