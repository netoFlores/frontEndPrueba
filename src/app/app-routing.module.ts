import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthGuard } from "./guards/auth.guard";

import { EditRegistroComponent } from "./components/edit-registro/edit-registro.component";
import { NeworderComponent } from "./components/neworder/neworder.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { SigninComponent } from "./components/signin/signin.component";

const routes: Routes = [
  {
    path: "",
    component: RegistroComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: "ordernes",
    component: RegistroComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "neworder",
    component: NeworderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "editorder/:id",
    component: EditRegistroComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
