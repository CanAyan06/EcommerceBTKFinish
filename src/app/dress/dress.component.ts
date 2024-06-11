import { Component, inject } from '@angular/core';
import { SepetComponent } from '../sepet/sepet.component';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dress',
  standalone: true,
  imports: [SepetComponent,CommonModule],
  templateUrl: './dress.component.html',
  styleUrl: './dress.component.css'
})
export class DressComponent {
  cartService=inject(CartService);
 
toaster=inject(ToastrService);
  product=[
    {  name:'Network N-tech Ekru Fermuarlı Sweatshirt',
    price:1560,
    id:1,
    imageUrl:'data:image/jpeg;base64,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' 

    },
    {name:'Omuzları Fiyonk Detaylı Tül Washington Midi Elbise 6785 - Mavi',
    price:519.90,
    id:2,
    imageUrl:'https://www.mooibutik.com/omuzlari-fiyonk-detayli-tul-washington-midi-elbise-67851-elbise-mooi-butik-28327-62-B.jpg' 
},
{
  name:'Göğüsü Drapeli Vencover Saten Elbise',
    price:799.90,
    id:3,
    imageUrl:'https://www.mooibutik.com/ince-askili-gogusu-drapeli-vencover-saten-elbise-5682-mavi-elbise-mooi-butik-36308-85-B.jpg'

},
{
  name:'U.S. Polo Assn. Kadın Lacivert Elbise',
    price:1300,
    id:4,
    imageUrl:'https://productimages.hepsiburada.net/s/777/1000/110000650687579.jpg'

},{
  name:'Polo Assn. Kadın Kırmızı Elbise',
    price:1300,
    id:5,
    imageUrl:'https://productimages.hepsiburada.net/s/777/600-800/110000669860398.jpg/format:webp'

},

{
  name:' Kadın Kiremit Dokuma Elbise',
    price:2550,
    id:6,
    imageUrl:'https://productimages.hepsiburada.net/s/499/600-800/110000550880760.jpg/format:webp'

},

{
  name:'Kadın Siyah Elbise',
    price:1300,
    id:7,
    imageUrl:'https://productimages.hepsiburada.net/s/777/600-800/110000697615277.jpg/format:webp'

},

{
  name:'Kumaş Mix Midi Elbise',
    price:3219,
    id:8,
    imageUrl:'https://productimages.hepsiburada.net/s/777/600-800/110000668653441.jpg/format:webp'

},
{
  name:'Kuşaklı Midi Elbise',
    price:1800,
    id:9,
    imageUrl:'https://productimages.hepsiburada.net/s/777/550/110000652112848.jpg/format:webp'

},
{
  name:'Mango Elbise',
    price:1800,
    id:10,
    imageUrl:'https://productimages.hepsiburada.net/s/777/600-800/110000679934079.jpg/format:webp'

},
{
  name:'Kadın Lacivert Elbise ',
    price:1200,
    id:11,
    imageUrl:'https://productimages.hepsiburada.net/s/777/600-800/110000669860048.jpg/format:webp'

},
{
  name:'Kadın Pudra Elbise',
    price:1300,
    id:12,
    imageUrl:'https://productimages.hepsiburada.net/s/777/600-800/110000665234905.jpg/format:webp'

},
{
  name:'Desenli Hakim Yaka Elbise',
    price:1800,
    id:13,
    imageUrl:'https://productimages.hepsiburada.net/s/777/550/110000630617591.jpg/format:webp'

},
{
  name:'Erkek Lacivert Tişört ',
    price:999.95,
    id:14,
    imageUrl:'https://productimages.hepsiburada.net/s/777/1000/110000693893887.jpg'

},
{
  name:'Kesim Bisiklet Yaka',
    price:245,
    id:15,
    imageUrl:'https://productimages.hepsiburada.net/s/777/1000/110000705549680.jpg'

},
{
  name:'Siyah Tişört Basic ',
    price:999.95,
    id:16,
    imageUrl:'https://productimages.hepsiburada.net/s/777/600-800/110000637175092.jpg/format:webp'

},
{
  name:'Polo Yaka',
    price:338,
    id:18,
    imageUrl:'https://productimages.hepsiburada.net/s/777/600-800/110000690740692.jpg/format:webp'

},
{
  name:'Erkek Koyu Yeşil ',
    price:999,
    id:18,
    imageUrl:'https://productimages.hepsiburada.net/s/777/600-800/110000679540240.jpg/format:webp'

},
{
  name:'Slim Fit Dar',
    price:239.90,
    id:19,
    imageUrl:'https://productimages.hepsiburada.net/s/777/600-800/110000705788376.jpg/format:webp'

},
{
  name:'Polo Yaka Nakışlı ',
    price:1699.98,
    id:20,
    imageUrl:'https://productimages.hepsiburada.net/s/777/600-800/110000671656205.jpg/format:webp'

},
{
  name:'Lacivert Tişört Basic',
    price:999.95,
    id:21,
    imageUrl:'https://productimages.hepsiburada.net/s/777/600-800/110000662229700.jpg/format:webp'

},
{
  name:'Serin Tutan Regular ',
    price:338,
    id:22,
    imageUrl:'https://productimages.hepsiburada.net/s/777/1000/110000690728558.jpg'

},
{
  name:'Camel Comfort Fit ',
    price:8-689,
    id:23,
    imageUrl:'https://productimages.hepsiburada.net/s/777/1000/110000675945267.jpg'

},
{
  name:' Siyah Tişört Basic ',
    price:99,
    id:24,
    imageUrl:'https://productimages.hepsiburada.net/s/777/1000/110000672713245.jpg'

},
{
  name:'Regular Fit Rahat Kesim',
    price:1300,
    id:25,
    imageUrl:'https://productimages.hepsiburada.net/s/777/600-800/110000646234384.jpg/format:webp'

},
{
  name:' Erkek Gri Gömlek Desenli ',
    price:1400,
    id:26,
    imageUrl:'https://productimages.hepsiburada.net/s/777/1000/110000692348923.jpg'

},
{
  name:'Erkek Siyah Tişört Basic',
    price:999,
    id:27,
    imageUrl:'https://productimages.hepsiburada.net/s/777/1000/110000693893434.jpg'

},
{
  name:' Bel Düz Paça Comfort ',
    price:1403,
    id:28,
    imageUrl:'https://productimages.hepsiburada.net/s/777/1000/110000686217881.jpg'

},
{
  name:' Slim Fit Dar Kesim Beyaz',
    price:337,
    id:29,
    imageUrl:'https://productimages.hepsiburada.net/s/777/1000/110000705549409.jpg'

},
{
  name:'Fit Rahat Kesim',
    price:534,
    id:30,
    imageUrl:'https://productimages.hepsiburada.net/s/777/1000/110000690736282.jpg'

},
{
  name:' Erkek Beyaz Tişört Basic ',
    price:999,
    id:31,
    imageUrl:'https://productimages.hepsiburada.net/s/777/1000/110000658755647.jpg'

},
{
  name:' Lacivert Ceket',
    price:3383,
    id:32,
    imageUrl:'https://productimages.hepsiburada.net/s/777/550/110000664693140.jpg/format:webp'

},
{
  name:' Pamuk Serin Tutan Regular',
    price:339,
    id:33,
    imageUrl:'https://productimages.hepsiburada.net/s/777/600-800/110000690735053.jpg/format:webp'

},




  ]
  addToCart(product:any){
     this.toaster.success("Sepete Eklendi");
    this.cartService.addToCart(product);
    
  }
}
