import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { SepetComponent } from '../sepet/sepet.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sport',
  standalone: true,
  imports: [CommonModule,SepetComponent],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent {
  cartService = inject(CartService);
  toaster=inject(ToastrService);
  product=[
    {
      name:'Optimum Gold Standard ',
      price:6500,
      id:1,
      imageUrl:'https://cdn03.ciceksepeti.com/cicek/kcm71669939-3/XL/optimum-gold-standard-whey-protein-tozu-2260gr-kcm71669939-3-39e08be32dfa49b983bd6d96001b529e.jpg',
      
    },  { "name": "Weider Premium Whey Isolate ", "price": 6200, "id": 4, "imageUrl": "https://productimages.hepsiburada.net/s/88/550/110000031345374.jpg/format:webp" },
    { "name": "Weider Premium Whey Protein Tozu 2300 Gr Muz", "price": 5200, "id": 5, "imageUrl": "https://productimages.hepsiburada.net/s/88/550/110000031416799.jpg/format:webp" },
    { "name": "Ultimate Whey Protein Tozu", "price": 1230, "id": 6, "imageUrl": "https://productimages.hepsiburada.net/s/40/550/10683201847346.jpg/format:webp" },
    { "name": "Zeus Nutrition Nitro Pure ", "price": 500, "id": 7, "imageUrl": "https://productimages.hepsiburada.net/s/50/550/11012962680882.jpg/format:webp" },
    { "name": "Optimum Nutrition Gold Standard ", "price": 1980, "id": 8, "imageUrl": "https://productimages.hepsiburada.net/s/85/550/110000027397204.jpg/format:webp" },
    { "name": "Bigjoy Sports Isopro Whey Isolate", "price": 0, "id": 9, "imageUrl": "" },
    { "name": "ISO PRO", "price": 1850, "id": 10, "imageUrl": "https://productimages.hepsiburada.net/s/777/550/110000670849466.jpg/format:webp" },
    { "name": "Optimum Gold 100% Whey Gold", "price":4500, "id": 11, "imageUrl": "https://productimages.hepsiburada.net/s/13/550/9178446364722.jpg/format:webp" },
    { "name": "Proteinocean WHEY PROTEİN™", "price": 500, "id": 12, "imageUrl": "https://productimages.hepsiburada.net/s/541/550/110000600980345.jpg/format:webp" },
    { "name": "Mysupplement Protein Tozu Whey Protein Çikolata ", "price":1500 , "id": 13, "imageUrl": "https://productimages.hepsiburada.net/s/406/550/110000434468501.jpg/format:webp" },
    { "name": "Scıtec Whey Isolate 2000 ", "price":3400, "id": 14, "imageUrl": "https://productimages.hepsiburada.net/s/60/550/110000001428322.jpg/format:webp" },
    { "name": "High Nutrition Whey Protein", "price":600, "id": 15, "imageUrl": "https://productimages.hepsiburada.net/s/317/550/110000311199454.jpg/format:webp" },
    { "name": "High Whey Protein Tozu 2280", "price": 899, "id": 16, "imageUrl": "https://productimages.hepsiburada.net/s/446/550/110000480097324.jpg/format:webp" },
    { "name": "Saf Nutrition Protein Superfood ", "price":730, "id": 17, "imageUrl": "https://productimages.hepsiburada.net/s/344/550/110000352056565.jpg/format:webp" },
    { "name": "Iso Whey", "price": 750, "id": 19, "imageUrl": "https://productimages.hepsiburada.net/s/53/550/11127015276594.jpg/format:webp" },
    { "name": "High Whey Protein 2280 gr ", "price": 0, "id": 21, "imageUrl": "https://productimages.hepsiburada.net/s/380/550/110000398172707.jpg/format:webp" },

  ]
  
  addToCart(product:any){
    this.cartService.addToCart(product); // cartService'deki AddToCart metodunu çağırarak ürünü sepete ekle dedim
    this.toaster.success("Sepete Eklendi");
  }
}
