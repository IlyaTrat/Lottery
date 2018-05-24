import { Component, OnInit } from '@angular/core';
import { UserInfo, LoginService } from '../../login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: UserInfo = {userEmail: '', userId: '', userPassword: ''};

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  signup() {
      this.user.userEmail = this.user.userEmail.toLowerCase();
      this.loginService.postUser(this.user).subscribe(data => {
        console.log(data);
        this.user.userEmail = data.userEmail;
        this.user.userId = data.userId;
        this.user.userPassword = data.userPassword;
        this.loginService.setUserInfo(this.user);
      });
  }

}
