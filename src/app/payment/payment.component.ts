import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { CompletedpayComponent } from "../completedpay/completedpay.component";

@Component({
    selector: 'app-payment',
    standalone: true,
    templateUrl: './payment.component.html',
    styleUrl: './payment.component.css',
    imports: [CommonModule, CompletedpayComponent]
})
export class PaymentComponent {
  cartService = inject(CartService);
  paym!:boolean;
item: any;
  toaster: any;
  constructor(){}
deleteAllFromCart(item:any){
  this.paym=true;
 
  this.cartService.allDelete(item);
  alert("ÖDEME İŞLEMİ TAMAMLANMIŞTIR");
   this.toaster.success("ÖDEME İŞLEMİ TAMAMLANMIŞTIR");
}
}
