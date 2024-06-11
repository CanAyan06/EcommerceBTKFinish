import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SubSink } from 'subsink';
import { ServicesService } from '../services.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-urun',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,RouterModule],
  templateUrl: './urun.component.html',
  styleUrl: './urun.component.css'
})
export class UrunComponent {private _subSink = new SubSink();
  can: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    returnSecureToken: new FormControl(true),
   
    
  });
  
  constructor(private _service:ServicesService,private _router:Router) {}
  gir() {
    this._service.login(this.can.value).subscribe({
      next: (res: any) => {
        alert('Giriş Başarılı');
        this._service.SetIsLogin('true');
        this._router.navigateByUrl("home");
       
      },
      
      error: (error: any) => {
        alert('Giriş Başarısız');
        
      },
    })
   
  }
  ngOnDestroy(): void {
       
    this._subSink.unsubscribe();
  }
}
