import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http: HttpClient) { }


  private URL = 'http://localhost:8081/api/v1/catalogo/'


  getBodegas(pais: any, bodega: any){
    return this.http.get<any>(this.URL + 'bodegas/' + pais + '/' + bodega)
  }

  getPais(){
    return this.http.get<any>(this.URL + 'pais')
  }

  getTipobodega(){
    return this.http.get<any>(this.URL + 'tipobodega')
  }

  getTipoProducto(){
    return this.http.get<any>(this.URL + 'tipoproducto')
  }

}
