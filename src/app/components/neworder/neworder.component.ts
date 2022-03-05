import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { from } from 'rxjs';

import { Order, OrderService } from "../../services/order.service";
import {CatalogoService} from '../../services/catalogo.service'
import { SigninService } from '../../services/signin.service';

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['./neworder.component.css']
})
export class NeworderComponent implements OnInit {

  order : Order = {
    precioDescuento: 0
  }
  tipoBodega : any ;
  pais : any;
  outcome : string = 'Numero de Placa'

  lstBodega : any = [];
  lstPais : any = [];
  lstTipoBodega : any = [];
  lstTipoProducto : any = [];

  constructor(private router: Router, private orderService: OrderService, private catalogoService: CatalogoService, private signingService : SigninService) { }

  ngOnInit(): void {
    this.loadCatalogo();
  }

  loadCatalogo(){
     

      this.catalogoService.getPais().subscribe(
        res => {
          this.lstPais = res?.response
        },
        err => console.log(err)
        
      )

      this.catalogoService.getTipoProducto().subscribe(
        res => {
          this.lstTipoProducto = res?.response
        },
        err => console.log(err)
        
      )

      this.catalogoService.getTipobodega().subscribe(
        res => {
          this.lstTipoBodega = res?.response
        },
        err => console.log(err)
        
      )

      
  }


  onChange(deviceValue:any) {

    this.catalogoService.getBodegas(this.pais, this.tipoBodega).subscribe(
      res => {
        this.lstBodega = res?.response
      },
      err => console.log(err)
      
    )

  }


  onChangeTipoBodega(deviceValue:any) {
    if(this.tipoBodega == 1){
      this.outcome = 'Numero de Placa '
    }else{
      this.outcome = 'Numero de Flota '
    }

  }

  new(){
    let usuario = this.signingService.getIdUser();

    this.orderService.savedOrderLogistica(this.order).subscribe(
      res => console.log(res)
      , err => console.log(err)
    );
    
    this.router.navigate(['/ordernes'])
  }

}
