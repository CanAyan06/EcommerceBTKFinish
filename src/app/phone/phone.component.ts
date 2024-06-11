import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent {
  constructor(){
    
  }
  addToCart(product:any){
    this.cartService.addToCart(product); // cartService'deki AddToCart metodunu çağırarak ürünü sepete ekle dedim
    this.toaster.success("Sepete Eklendi");

  }
  cartService = inject(CartService);
  toaster=inject(ToastrService);
  product=[  { name: 'Xiaomi Redmi 12C ', price:5500, id: 1, imageUrl: 'https://productimages.hepsiburada.net/s/374/550/110000391927456.jpg/format:webp' },
  { name: 'iPhone 13 128 GB', price: 35500, id: 2, imageUrl: 'https://productimages.hepsiburada.net/s/189/550/110000155170579.jpg/format:webp' },
  { name: 'Oppo Reno11 ', price: 18999, id: 3, imageUrl: 'https://productimages.hepsiburada.net/s/777/550/110000694676674.jpg/format:webp' },
  { name: 'Xiaomi Redmi 12 ', price: 6849, id: 4, imageUrl: 'https://productimages.hepsiburada.net/s/478/550/110000521396581.jpg/format:webp' },
  { name: 'Huawei Nova 12', price: 17999, id: 5, imageUrl: 'https://productimages.hepsiburada.net/s/777/550/110000690526950.jpg/format:webp' },
  { name: 'iPhone 11', price: 24000, id: 6, imageUrl: 'https://productimages.hepsiburada.net/s/49/550/10986385866802.jpg/format:webp' },
  { name: 'HONOR 90', price: 14980, id: 7, imageUrl: 'https://productimages.hepsiburada.net/s/488/550/110000535286704.jpg/format:webp' },
  { name: 'Xiaomi Redmi Note 13 ', price: 13999, id: 8, imageUrl: 'https://productimages.hepsiburada.net/s/543/550/110000603451956.jpg/format:webp' },
  { name: 'Reeder P13', price: 2760, id: 9, imageUrl: 'https://productimages.hepsiburada.net/s/202/550/110000175701896.jpg/format:webp' },
  { name: 'Samsung Galaxy S24', price:35248, id: 10, imageUrl: 'https://productimages.hepsiburada.net/s/538/550/110000596371024.jpg/format:webp' },
  { name: 'Samsung Galaxy S23 ', price: 44000, id: 11, imageUrl: 'https://productimages.hepsiburada.net/s/356/550/110000365198349.jpg/format:webp' },
  { name: 'Poco X6 ', price: 18999, id: 12, imageUrl: 'https://productimages.hepsiburada.net/s/540/550/110000600142047.jpg/format:webp' },
  { name: 'iPhone 15', price:70199, id: 13, imageUrl: 'https://productimages.hepsiburada.net/s/462/550/110000498846214.jpg/format:webp' },
  { name: 'Xiaomi Redmi Note 13 ', price:16999, id: 14, imageUrl: 'https://productimages.hepsiburada.net/s/543/550/110000603451972.jpg/format:webp' },
  { name: 'Galaxy M34', price: 9399, id: 15, imageUrl: 'https://productimages.hepsiburada.net/s/777/550/110000647170164.jpg/format:webp' },
  { name: 'iPhone 15', price:54000, id: 16, imageUrl: 'https://productimages.hepsiburada.net/s/462/550/110000498573428.jpg/format:webp' },
  { name: 'iPhone 15 128 GB', price:55000, id: 17, imageUrl: 'https://productimages.hepsiburada.net/s/462/550/110000498575735.jpg/format:webp' },
  { name: 'Galaxy S23', price: 27000, id: 18, imageUrl: 'https://productimages.hepsiburada.net/s/379/550/110000397106641.jpg/format:webp' },
  { name: 'Galaxy A24', price: 7900, id: 19, imageUrl: 'https://productimages.hepsiburada.net/s/400/550/110000425068991.jpg/format:webp' },
  { name: 'iPhone 11 ', price: 21500, id: 20, imageUrl: 'https://productimages.hepsiburada.net/s/493/550/110000542329931.jpg/format:webp' },
  { name: 'Tecno Spark 20 ', price: 13000, id: 21, imageUrl: 'https://productimages.hepsiburada.net/s/777/550/110000650788456.jpg/format:webp' },
  { name: 'Nova 12S 256 GB ', price:22000, id: 22, imageUrl: 'https://productimages.hepsiburada.net/s/777/550/110000690528301.jpg/format:webp' },
  { name: 'iPhone 12 ', price: 29500, id: 23, imageUrl: 'https://productimages.hepsiburada.net/s/76/550/110000018213454.jpg/format:webp' },
  { name: 'Tecno Spark 20 ', price: 10500, id: 24, imageUrl: 'https://productimages.hepsiburada.net/s/777/550/110000650851655.jpg/format:webp' },
  { name: 'Samsung Galaxy A14 ', price: 6500, id: 25, imageUrl: 'https://productimages.hepsiburada.net/s/378/550/110000396328901.jpg/format:webp' },
  { name: 'Galaxy A35 ', price:14000 , id: 26, imageUrl: 'https://productimages.hepsiburada.net/s/777/550/110000649692492.jpg/format:webp' },
  ]
}
