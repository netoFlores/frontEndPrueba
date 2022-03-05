import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private URL = 'http://localhost:8081/api/auth/'

  constructor(private http: HttpClient, private router: Router) { }

  signup(user: any){
    return this.http.post<any>(this.URL + 'singup', user);
  }

  signin(user: any){
    return this.http.post<any>(this.URL + 'signin', user);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getIdUser(){
    return localStorage.getItem('user');
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/signin'])
  }
}
