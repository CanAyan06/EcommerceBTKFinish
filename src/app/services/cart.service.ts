import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // items adında özel bir dizi tanımlıyorum.sepete eklenen ürünleri saklamak için kullanılacam
  private items:any[]=JSON.parse(localStorage.getItem('cartItems')||'[]'); // sayfa yeniledimde sepete gitmiyordu bu yüzden...
  constructor() { }

    // addToCart metodu, sepete bir ürün eklemek için kullanılır.
  // product parametresi, sepete eklenmek istenen ürünü temsil eder.
  addToCart(product:any){
       // Ürünü items dizisine ekliyoruz.
    this.items.push({...product, quantity :1}) ;
    localStorage.setItem('cartItems',JSON.stringify(this.items));
    
  }
    // getItem metodu, sepetteki tüm ürünleri döndürmek için kullanılır.
  getItem(){
        // Sepetteki ürünleri döndürüyoruz.
  return this.items;
  localStorage.setItem('cartItems',JSON.stringify(this.items));
}
delete(item:any){
  this.items=this.items.filter((i)=>i.id !== item.id);
  localStorage.setItem('cartItems',JSON.stringify(this.items));

}
incrementQuantityy(id:number){
let item=this.items.find((i)=> i.id===id);
if(item){
  item.quantity++;
}
localStorage.setItem('cartItems',JSON.stringify(this.items));
}
decrementQuantity(id:number){
  let item=this.items.find((i)=> i.id===id);
  if(item){
   if(item.quantity>1){
    item.quantity--;
   }
   
  }
  localStorage.setItem('cartItems',JSON.stringify(this.items));
}
getTotal(){
  return this.items.reduce((acc,item)=>{
    return acc+item.price*item.quantity;
  },0);
  localStorage.setItem('cartItems',JSON.stringify(this.items));
}

allDelete(item:any) {
  this.items = [];
  localStorage.setItem('cartItems', JSON.stringify(this.items));
}
  
}
