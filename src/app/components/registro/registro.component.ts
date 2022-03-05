import { Component, OnInit } from '@angular/core';
import { Order, OrderService } from "../../services/order.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  lstOrder: Order[] = []

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.getListOrder();
  }

  getListOrder(){
    this.orderService.getOrderLogistica().subscribe(
      res => {
        console.log(res)
        this.lstOrder = res?.lstordertt
      },
      err => console.log(err)
    );
  }

  edit(id: any){
    this.router.navigate([`/editorder/${id}`])
  }

  delete(id: any){
    this.orderService.deletedOrderLogistica(id).subscribe(
      res => this.getListOrder(),
      err => console.log(err)
    )
  }

}
