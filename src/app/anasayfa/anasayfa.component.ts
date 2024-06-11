import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { SlidersComponent } from '../sliders/sliders.component';

@Component({
    selector: 'app-anasayfa',
    standalone: true,
    templateUrl: './anasayfa.component.html',
    styleUrl: './anasayfa.component.css',
    imports: [RouterModule, CommonModule, SlidersComponent, ]
})
export class AnasayfaComponent {
  
  cartService=inject(CartService);
products: any;
  addToCart(product:any){
    this.cartService.addToCart(product); // cartService'deki AddToCart metodunu çağırarak ürünü sepete ekle dedim
  }
  
}
