import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-watch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.css'
})
export class WatchComponent {
  today: number = Date.now();
  cartService = inject(CartService);
  toaster=inject(ToastrService);
  product=[
    
    {
      name:'Daniel Klein DKE.1.10455.6 Daniel Klein Erkek Kol Saati',
      price:2300,
      id:1,
      imageUrl:'https://productimages.hepsiburada.net/s/426/550/110000457439982.jpg/format:webp',
      
    },
    {
      name:'Casio MTP-1374D-1AVDF Standart Erkek Kol Saati',
      price: 2700 ,
      id:2 ,
      imageUrl:'https://productimages.hepsiburada.net/s/7/550/9157345738802.jpg/format:webp',
    },
    {
      name:'Casio MTP-VD01D-1BVUDF Standart Erkek Kol Saati',
      price:  1899,
      id:3 ,
      imageUrl:'https://productimages.hepsiburada.net/s/20/550/9882744094770.jpg/format:webp',
    },
    {
      name:'GUW0668G5 Erkek Kol Saati',
      price:3935.90  ,
      id:4 ,
      imageUrl:'https://productimages.hepsiburada.net/s/253/550/110000235563222.jpg/format:webp',
    },
    {
      name:'Citizen Tsuyosa NJ0151-88M Erkek Kol Saat',
      price:14500  ,
      id:5 ,
      imageUrl:'https://productimages.hepsiburada.net/s/511/550/110000565836288.jpg/format:webp',
    },
    {
      name:'Daniel Klein DKE.1.10455-9 Erkek Kol Saati',
      price: 2300 ,
      id:6 ,
      imageUrl:'https://productimages.hepsiburada.net/s/777/550/110000629818801.jpg/format:webp',
    },
    {
      name:'Casio MTP-1374D-2AVDF Standart Erkek Kol Saati',
      price:2600,
      id:7 ,
      imageUrl:'https://productimages.hepsiburada.net/s/9/550/9157345804338.jpg/format:webp',
    },
    {
      name:'Seiko 5 Sports SRPD63K Otomatik Erkek Kol Saati',
      price:12950  ,
      id:8 ,
      imageUrl:'https://productimages.hepsiburada.net/s/777/550/110000667646039.jpg/format:webp',
    },
    {
      name:'https://productimages.hepsiburada.net/s/777/550/110000667646039.jpg/format:webp',
      price: 12920 ,
      id:9 ,
      imageUrl:'https://productimages.hepsiburada.net/s/777/550/110000667646039.jpg/format:webp',
    },
    {
      name:'Versace VRSCVEHU00420 Bayan Kol Saati',
      price: 27524,
      id:10 ,
      imageUrl:'https://productimages.hepsiburada.net/s/154/550/110000110942775.jpg/format:webp',
    },
    {
      name:'Daniel Klein DKE.1.10455 Erkek Kol Saati',
      price: 2300 ,
      id:11 ,
      imageUrl:'https://productimages.hepsiburada.net/s/777/550/110000632297300.jpg/format:webp',
    },
    {
      name:'Daniel Klein DKE.1.10455.8 Daniel Klein Erkek Kol Saati',
      price: 2300 ,
      id:12,
      imageUrl:'https://productimages.hepsiburada.net/s/426/550/110000457439983.jpg/format:webp',
    },
    {
      name:'Casio G-Shock GA-2100-1A1DR Erkek Kol Saati',
      price: 4300 ,
      id:13 ,
      imageUrl:'https://productimages.hepsiburada.net/s/501/550/110000554548167.jpg/format:webp',
    },
    {
      name:'Tommy Hilfiger TH1782301 Kadın Kol Saati',
      price: 5500 ,
      id:14 ,
      imageUrl:'https://productimages.hepsiburada.net/s/777/550/110000661962683.jpg/format:webp',
    },
    {
      name:'FFS5708SET Erkek Set Kol Saati ve Bileklik',
      price: 3430 ,
      id:15 ,
      imageUrl:'https://productimages.hepsiburada.net/s/198/550/110000169002029.jpg/format:webp',
    },
    {
      name:'Casio GBA-900UU-5ADR Kol Saati',
      price: 6919 ,
      id:16 ,
      imageUrl:'https://productimages.hepsiburada.net/s/250/550/110000232437515.jpg/format:webp',
    },
    {
      name:'Emporio Armani AR11310 Ruggero Erkek Kol Saati',
      price:5034  ,
      id:17 ,
      imageUrl:'https://productimages.hepsiburada.net/s/198/550/110000169000394.jpg/format:webp',
    },
    {
      name:'Seiko SPB143J Erkek Kol Saati',
      price:56291  ,
      id:18 ,
      imageUrl:'https://productimages.hepsiburada.net/s/777/550/110000661963074.jpg/format:webp',
    },
    {
      name:'Daniel Klein DKE.1.10455.5 Daniel Klein Erkek Kol Saati',
      price:2299  ,
      id:19 ,
      imageUrl:'https://productimages.hepsiburada.net/s/426/550/110000457447599.jpg/format:webp',
    },
    {
      name:'GUW0668G7 Erkek Kol Saati',
      price:3880 ,
      id:20  ,
      imageUrl:'https://productimages.hepsiburada.net/s/42/550/10720752402482.jpg/format:webp',
    },
    {
      name:'Santa Barbara Polo & Racquet Club SB.1.10508.4 Erkek Kol Saati',
      price:459  ,
      id: 21,
      imageUrl:'https://productimages.hepsiburada.net/s/451/550/110000486472838.jpg/format:webp',
    },
    {
      name:'Casio F-91W-1DG Digital Erkek Kol Saati',
      price:  535,
      id:22 ,
      imageUrl:'https://productimages.hepsiburada.net/s/20/550/9870814642226.jpg/format:webp',
    },
    {
      name:'LAC2011095 Erkek Kol Saati',
      price: 2876 ,
      id: 23,
      imageUrl:'https://productimages.hepsiburada.net/s/216/550/110000194787088.jpg/format:webp',
    },
    {
      name:'Casio ECB-900MDC-1ADR Erkek Kol Saati',
      price:10760  ,
      id:24 ,
      imageUrl:'https://productimages.hepsiburada.net/s/140/550/110000092621331.jpg/format:webp',
    },
    {
      name:'Daniel Klein DKE.1.10606-2 Erkek Kol Saati',
      price: 1949 ,
      id: 25,
      imageUrl:'https://productimages.hepsiburada.net/s/777/550/110000630701554.jpg/format:webp',
    },
    {
      name:'Casio AE-1200WHD-1AVDF Digital Erkek Kol Saati',
      price: 1950 ,
      id: 26,
      imageUrl:'https://productimages.hepsiburada.net/s/19/550/9852947628082.jpg/format:webp',
    },
    {
      name:'MK3298 Kadın Kol Saati',
      price:4456  ,
      id:27 ,
      imageUrl:'https://productimages.hepsiburada.net/s/209/550/110000187084113.jpg/format:webp',
    },
    {
      name:'Daniel Klein Erkek Kol Saati DKE.1.10609-3',
      price:2099  ,
      id:28 ,
      imageUrl:'https://productimages.hepsiburada.net/s/777/550/110000682686739.jpg/format:webp',
    },
    {
      name:'Daniel Klein Erkek Kol Saati DK.1.13656-7',
      price: 2279 ,
      id:29 ,
      imageUrl:'https://productimages.hepsiburada.net/s/777/550/110000682687442.jpg/format:webp',
    },
    {
      name:'Seiko Srpd53K Erkek Kol Saati',
      price: 12555 ,
      id:30 ,
      imageUrl:'https://productimages.hepsiburada.net/s/777/550/110000661963060.jpg/format:webp',
    },
  
  ]
date: any;
    
    addToCart(product:any){
      this.cartService.addToCart(product); // cartService'deki AddToCart metodunu çağırarak ürünü sepete ekle dedim
      this.toaster.success("Sepete Eklendi");
  
    }
}
