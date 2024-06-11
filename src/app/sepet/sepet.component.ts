import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sepet',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './sepet.component.html',
  styleUrl: './sepet.component.css'
})
export class SepetComponent {
toaster=inject(ToastrService);
 cartService = inject(CartService);

 // Sepetten öğe silme işlemi
 deleteFromCart(item: any) {
   this.cartService.delete(item); // CartService'deki delete metodunu çağırarak öğeyi sepetten silx
   this.toaster.error("Başarıyla Silindi");
 }

}
