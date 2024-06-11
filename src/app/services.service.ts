import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  loginUrl =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBT0E17yVuRz80JMh_1nfIm2wnZnwdvNZs';
  registerUrl =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBT0E17yVuRz80JMh_1nfIm2wnZnwdvNZs';
  constructor(private _http: HttpClient) {}

  register(payload: any) {
    console.log(payload);

    return this._http.post(this.registerUrl, payload);
  }
  login(payload: any) {
    return this._http.post(this.loginUrl, payload);
  }
  getIsLogin() {
    const isLogin =JSON.parse (localStorage.getItem('isLogin')!);
    return isLogin;
  }
  SetIsLogin(set: string) {
    localStorage.setItem('isLogin', JSON.stringify(set));
  }
}
