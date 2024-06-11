import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { SepetComponent } from '../sepet/sepet.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-computer',
  standalone: true,
  imports: [SepetComponent],
  templateUrl: './computer.component.html',
  styleUrl: './computer.component.css'
})
export class ComputerComponent {
cartService=inject(CartService);
toaster=inject(ToastrService);
products=[
  {
    name:'Monster Tulpar Abra A5',
    price:10000,
    id:1,
    imageUrl:'https://www.monsternotebook.com.tr/UPLOAD/urun-gorselleri-yeni/TULPAR/kucuk-resimler-2/thumb/tulpar-t5-v20.1-resim-2_medium.png'
  },
  {
    name:'Monster Tulpar Abra A7',
    price:10000,
    id:2,
    imageUrl:'https://resim.epey.com/898473/m_monster-tulpar-t5-v23-3-2-1.jpg'
  },

  { name: 'Casper Excalibur G870', price: 29999, id: 4, imageUrl: 'https://productimages.hepsiburada.net/s/379/550/110000397669204.jpg/format:webp' },
  { name: 'Excalibur G870.1245', price: 31299, id: 5, imageUrl: 'https://productimages.hepsiburada.net/s/500/550/110000554260761.jpg/format:webp' },
  { name: 'Huawei Matebook D16', price: 19000, id: 6, imageUrl: 'https://productimages.hepsiburada.net/s/777/550/110000687455465.jpg/format:webp' },
  { name: 'Lenovo IdeaPad Gaming 3 ', price: 22000, id: 7, imageUrl: 'https://productimages.hepsiburada.net/s/777/550/110000647143852.jpg/format:webp'  },
  { name: 'Asus Vivobook 15 ', price: 11000, id: 8, imageUrl: 'https://productimages.hepsiburada.net/s/777/550/110000675739466.jpg/format:webp' },
  { name: 'Razer Blade 14', price: 55000, id: 9, imageUrl: 'https://productimages.hepsiburada.net/s/777/550/110000645777056.jpg/format:webp' },
  { name: 'Lenovo LOQ Intel ', price: 2970, id: 10, imageUrl: 'https://productimages.hepsiburada.net/s/435/550/110000468471456.jpg/format:webp' },
  { name: 'Hp Victus 16', price:34000, id: 11, imageUrl: 'https://productimages.hepsiburada.net/s/430/550/110000462429800.jpg/format:webp' },
  { name: 'HP Victus Gaming 16-', price: 32000, id: 12, imageUrl: 'https://productimages.hepsiburada.net/s/426/550/110000457076924.jpg/format:webp' },
  { name: 'Dell Inspiron', price: 14000, id: 13, imageUrl: 'https://productimages.hepsiburada.net/s/513/550/110000568470493.jpg/format:webp' },
  { name: 'Lenovo LOQ 15IRH8', price: 30000, id: 14, imageUrl: 'https://productimages.hepsiburada.net/s/538/550/110000597129471.jpg/format:webp' },
  { name: 'Lenovo Ideapad 1 ', price: 15000, id: 15, imageUrl: 'https://productimages.hepsiburada.net/s/439/550/110000470745489.jpg/format:webp' },
  { name: 'Acer Aspire 3 ', price:9700, id: 16, imageUrl: 'https://productimages.hepsiburada.net/s/504/550/110000558693921.jpg/format:webp' },
  { name: 'Casper Nirvana X600', price: 16000, id: 17, imageUrl: 'https://productimages.hepsiburada.net/s/494/550/110000545271941.jpg/format:webp' },
  { name: 'Lenovo IdeaPad 3', price:11500, id: 18, imageUrl: 'https://productimages.hepsiburada.net/s/498/550/110000549498634.jpg/format:webp' },
  { name: 'Casper Nirvana C550', price: 14000, id: 19, imageUrl: 'https://productimages.hepsiburada.net/s/495/550/110000545473005.jpg/format:webp' },
  { name: 'Hp Victus 15-', price:24000, id: 20, imageUrl: 'https://productimages.hepsiburada.net/s/379/550/110000377772352.jpg/format:webp' },
  { name: 'Casper Nirvana X600', price: 13509, id: 21, imageUrl: 'https://productimages.hepsiburada.net/s/494/550/110000545271606.jpg/format:webp' },
  { name: 'Huawei Matebook D16', price:24000, id: 22, imageUrl: 'https://productimages.hepsiburada.net/s/542/550/110000601522258.jpg/format:webp' },
  { name: 'Asus TUF Gaming F15', price: 25000, id: 23, imageUrl: 'https://productimages.hepsiburada.net/s/537/550/110000595781671.jpg/format:webp' },
  { name: 'Lenovo V15 G4', price: 15000, id: 24, imageUrl: 'https://productimages.hepsiburada.net/s/525/550/110000582513634.jpg/format:webp' },
  { name: 'Huawei Matebook D14', price:22000, id: 25, imageUrl: 'https://productimages.hepsiburada.net/s/564/550/110000627282460.jpg/format:webp' },
  { name: 'Dell Gaming G15 ', price: 41000, id: 26, imageUrl: 'https://productimages.hepsiburada.net/s/425/550/110000456476642.jpg/format:webp' },
  { name: 'Can Ayan', price: 50000, id: 27, imageUrl: 'https://productimages.hepsiburada.net/s/537/550/110000596384961.jpg/format:webp' },

];
  addToCart(product:any){
    this.cartService.addToCart(product); // cartService'deki AddToCart metodunu çağırarak ürünü sepete ekle dedim
    this.toaster.success("Sepete Eklendi");
  }



}
