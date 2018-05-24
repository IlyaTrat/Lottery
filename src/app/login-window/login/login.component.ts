import { Component, OnInit } from '@angular/core';
import { UserInfo, LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserInfo = {userEmail: '', userId: '', userPassword: ''};

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.user = this.loginService.user;
  }

  login() {
    this.user.userEmail = this.user.userEmail.toLowerCase();
    this.loginService.validateInfo(this.user).subscribe(data => {
      this.user.userEmail = data.userEmail;
      this.user.userId = data.userId;
      this.user.userPassword = data.userPassword;
      this.loginService.setUserInfo(this.user);
    });
  }

  logout() {
    this.user = {userEmail: '', userId: '', userPassword: ''};
    this.loginService.setUserInfo(this.user);
  }

}
