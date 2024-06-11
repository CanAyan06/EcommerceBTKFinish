import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-begen',
  standalone: true,
  imports: [],
  templateUrl: './begen.component.html',
  styleUrl: './begen.component.css',
})
export class BegenComponent {
  sepetSayi: any;
  islogin = false;
  @Inject(Router) router!: Router; 

  ngOnInit(): void {
    var dt: any | null = localStorage.getItem('cartItems');
    this.sepetSayi = JSON.parse(dt)?.length;
    if(localStorage.getItem('logined') == 'true')
      {
        this.islogin = true;
      }else{
        this.islogin = false;
      }
      console.log(this.islogin);
  }
  signOut(): void {
    localStorage.clear();
    localStorage.setItem('logined','false');
    this.router.navigateByUrl('login');
  }
}
