import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { SigninService} from './services/signin.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private signingService: SigninService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //console.log(req);

    if(req.url !='http://localhost:8081/api/auth/singin'){

    let tokenizeReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.signingService.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }
  return next.handle(req);
  }
}
