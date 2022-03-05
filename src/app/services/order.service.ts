import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SigninService } from "./signin.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private URL = 'http://localhost:8081/api/v1/orderlogistica'

  constructor(private http: HttpClient, private signinService : SigninService) { }


  getOrderLogistica(){
    return this.http.get<any>(this.URL + '?size=1000&sort=idTtOrderLogistica%2Cdesc')
  }

  savedOrderLogistica(order: Order){
    console.log(this.signinService.getIdUser())
    order.tsUsuario = 1;
    return this.http.post<any>(this.URL, order);
  }

  updatedOrderLogistica(order: Order){
    return this.http.put<any>(this.URL, order);
  }

  deletedOrderLogistica(id: any){
    return this.http.delete<any>(this.URL + '/' + id)
  }

}

export interface Order{
  cantidadProducto?: Number,
  fechaEntrega?: string,
  fechaRegistro?: string,
  idTtOrderLogistica?: Number,
  numeroGuia?: string,
  placa?: string,
  porcentajeDescuento?: Number,
  precioDescuento?: Number,
  precioEnvio?: Number,
  tcTipoProducto?: Number,
  tsBodega?: Number,
  tsUsuario?: Number
}