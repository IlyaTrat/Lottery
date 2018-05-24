import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

export interface UserInfo {
  userEmail: String;
  userId: String;
  userPassword: String;
}

@Injectable()
export class LoginService {
  user: UserInfo = {userEmail: '', userId: '', userPassword: ''};
  @Output() change: EventEmitter<UserInfo> = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  setUserInfo(data: UserInfo) {
    this.user = data;
    this.change.emit(this.user);
  }

  validateInfo(user: UserInfo): Observable<UserInfo> {
    return this.http.post<UserInfo>('http://localhost:3000/api/login', user);
  }

  postUser(user: UserInfo): Observable<UserInfo> {
    return this.http.put<UserInfo>('http://localhost:3000/api/signin', user);
  }

}
