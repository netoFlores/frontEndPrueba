import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HTTP_INTERCEPTORS} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EditRegistroComponent } from './components/edit-registro/edit-registro.component';
import { NeworderComponent } from "./components/neworder/neworder.component";

import { AuthGuard } from "./guards/auth.guard";
import { TokenInterceptor } from "./token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegistroComponent,
    EditRegistroComponent,
    NeworderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
