import { Component, OnInit } from '@angular/core';
import { SigninService } from "../../services/signin.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = {username: '', password: ''}

  constructor(private authService : SigninService, private router : Router) { }

  ngOnInit(): void {
  }

  signin(){ 
    this.authService.
    signin(this.user)
    .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          localStorage.setItem('user', res.id)
          this.router.navigate(['/'])
        },
        err => console.log(err)

      )
  }

}
