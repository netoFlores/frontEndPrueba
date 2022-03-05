import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SigninService } from "../services/signin.service";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private authService: SigninService, private router: Router){}


  canActivate(): boolean{
    
    if(this.authService.loggedIn()){
      return true;
    }
    
    this.router.navigate(['/signin'])
    return false;
  }
  
}
