import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shoe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoe.component.html',
  styleUrl: './shoe.component.css'
})
export class ShoeComponent {
 
  constructor(){
    
  }
  cartService = inject(CartService);
  toaster=inject(ToastrService);
  product=[
    
    {
      name:'Nike Air Max Dn2',
      price:6500,
      id:1,
      imageUrl:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/85b2c610-003e-4a03-adab-680d3f20010f/air-max-dn-ayakkab%C4%B1-hZC5QK.png',
      
    },
    {
      name:'Nike Air Max Plus',
      price:7000,
      id:2,
      imageUrl:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/daa67853-22ef-4f57-88d9-3e0afd50e44c/air-max-plus-gen%C3%A7-ayakkab%C4%B1s%C4%B1-VWK3gG.png',
      
    },
    {

      name:'Nike Air Max Dn',
      price: 7000,
      id:3,
      imageUrl:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a710787c-70eb-489b-a37a-8c5d3d0f3fc2/air-max-dn-ayakkab%C4%B1-q51Wwn.png',
     
    },
    {

      name:'hummel Acne Kadın Sneaker',
      price: 1314.95,
      id:4,
      imageUrl:'https://cdn.dsmcdn.com/ty1333/product/media/images/prod/QC/20240527/11/08a6a5bb-231f-3592-a0cb-c345751f23a4/1_org_zoom.jpg',
     
    },
    {

      name:'Ortopedik Kadın ',
      price: 755.49,
      id:5,
      imageUrl:'https://cdn.dsmcdn.com/ty1305/product/media/images/prod/SPM/PIM/20240510/10/e8d660c1-b74f-32e6-b496-b0356d53c108/1_org_zoom.jpg',
     
    },
    {

      name:'Beyaz Lacivert Spor Ayakkabı',
      price:439 ,
      id:6,
      imageUrl:'https://cdn.dsmcdn.com/ty1341/product/media/images/prod/QC/20240531/17/372c44f4-a143-388b-8a24-ca5f2c4cd855/1_org_zoom.jpg',
     
    },
    {

      name:'Günlük Spor Ayakkabı',
      price: 759,
      id:7,
      imageUrl:'https://cdn.dsmcdn.com/ty1230/product/media/images/prod/SPM/PIM/20240328/13/2462eb3b-49c5-361d-97ec-1961de0a820c/1_org_zoom.jpg',
     
    },
    {

      name:'Bağcıklı Süet Deri Sneaker',
      price: 4532,
      id:8,
      imageUrl:'https://cdn.dsmcdn.com/ty1324/product/media/images/prod/QC/20240521/15/39a98c5f-ca9c-329d-ad4e-cb109ced2231/1_org_zoom.jpg',
     
    },
    {

      name:'Günlük Spor Ayakkabı',
      price: 595.95,
      id:9,
      imageUrl:'https://cdn.dsmcdn.com/ty1232/product/media/images/prod/SPM/PIM/20240328/13/1d43f3d4-a6ac-3450-957b-7770a920b442/1_org_zoom.jpg',
     
    },
    {

      name:'Koşu Spor Ayakkabı',
      price:740 ,
      id:10,
      imageUrl:'https://cdn.dsmcdn.com/ty1232/product/media/images/prod/SPM/PIM/20240328/13/0a8516ec-84fe-3012-9858-4001831b1bc5/1_org_zoom.jpg',
     
    },
    {

      name:'Siyah Erkek Bot ',
      price:603.02 ,
      id:11,
      imageUrl:'https://cdn.dsmcdn.com/ty290/product/media/images/20220107/11/22979734/59360168/1/1_org_zoom.jpg',
     
    },
    {

      name:'topuklu sandalet',
      price: 1.150,
      id:12,
      imageUrl:'https://cdn.dsmcdn.com/ty1273/product/media/images/prod/SPM/PIM/20240424/18/2ce122bb-00e6-3ba2-8298-c90ca105ff90/1_org_zoom.jpg',
     
    },
    {

      name:'Bot 0012723 Siyah Beyaz',
      price: 778,
      id:13,
      imageUrl:'https://cdn.dsmcdn.com/ty1089/product/media/images/prod/SPM/PIM/20231214/16/3f163f2e-dcdb-391a-8ccf-57867843c1de/1_org_zoom.jpg',
     
    },
    {

      name:' Erkek Kışlık Spor Ayakkabı',
      price:500 ,
      id:14,
      imageUrl:'https://cdn.dsmcdn.com/ty576/product/media/images/20221024/9/201175611/68052255/1/1_org_zoom.jpg',
     
    },
    {

      name:'Ortopedik Günlük Spor Ayakkabı',
      price: 550,
      id:15,
      imageUrl:'https://cdn.dsmcdn.com/ty1229/product/media/images/prod/SPM/PIM/20240327/00/9c885c3e-61a3-3a26-abc7-7982bf5a6894/1_org_zoom.jpg',
     
    },
    {

      name:'Lacivert Spor Ayakkabı',
      price:700 ,
      id:16,
      imageUrl:'https://cdn.dsmcdn.com/ty1341/product/media/images/prod/QC/20240531/13/1a91e564-f5fa-3a7b-85c5-5e0166fa43b9/1_org_zoom.jpg',
     
    },
    {

      name:'Kadın Spor Ayakkabı',
      price:550 ,
      id:17,
      imageUrl:'https://cdn.dsmcdn.com/ty1142/product/media/images/prod/SPM/PIM/20240120/19/dc2b9b82-e101-389c-8b7d-9a39cb754f99/1_org_zoom.jpg',
     
    },
    {

      name:'Porter Ayakkabı',
      price:665 ,
      id:18,
      imageUrl:'https://cdn.dsmcdn.com/ty1345/product/media/images/prod/QC/20240529/04/53e790b5-3dff-3b99-a9a5-fd1707c8b489/1_org_zoom.jpg',
     
    },
    {

      name:'Beyaz PORTER',
      price: 1010.95,
      id:19,
      imageUrl:'https://cdn.dsmcdn.com/ty593/product/media/images/20221107/11/209184819/76316210/2/2_org_zoom.jpg',
     
    },
    {

      name:'Erkek Koşu Ayakkabısı',
      price:1449 ,
      id:20,
      imageUrl:'https://cdn.dsmcdn.com/ty1234/product/media/images/prod/SPM/PIM/20240330/03/39e1e2a9-da9b-3ace-be66-c5f3cc22eeb2/1_org_zoom.jpg',
     
    },
    {

      name:'Siyah Erkek Sneaker',
      price: 1325,
      id:21,
      imageUrl:'https://cdn.dsmcdn.com/ty1242/product/media/images/prod/SPM/PIM/20240404/03/779e2461-abdc-3659-aa24-23567949ce4d/1_org_zoom.jpg',
     
    },
    {

      name:'Erkek Koşu Ayakkabısı',
      price:2500 ,
      id:22,
      imageUrl:'https://cdn.dsmcdn.com/ty1163/product/media/images/prod/SPM/PIM/20240208/04/f6355d21-f634-3be5-80dc-a3746f539f71/1_org_zoom.jpg',
     
    },
    {

      name:'Esnek Taban Sneaker',
      price: 2314,
      id:23,
      imageUrl:'https://cdn.dsmcdn.com/ty1349/product/media/images/prod/QC/20240604/22/a202dfbf-5a05-32c0-9996-d00ec188296c/1_org_zoom.jpg',
     
    },
    {

      name:'Kalın Tabanlı Kumaş Sneaker',
      price: 2800,
      id:24,
      imageUrl:'https://cdn.dsmcdn.com/ty1324/product/media/images/prod/QC/20240521/12/bbc12f99-ce4f-3e50-84b6-aab20ab698d2/1_org_zoom.jpg',
     
    },

  ]
  addToCart(product:any){
    this.cartService.addToCart(product); // cartService'deki AddToCart metodunu çağırarak ürünü sepete ekle dedim
    this.toaster.success("Sepete Eklendi");

  }
}
