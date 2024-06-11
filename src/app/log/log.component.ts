import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ServicesService } from '../services.service';
import { SubSink } from 'subsink';


@Component({
  selector: 'app-log',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,RouterModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css',
  providers:[ServicesService]
})
export class LogComponent {
  private _subSink = new SubSink();
  can: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    returnSecureToken: new FormControl(true),
   
    
  });
  
  constructor(private _service:ServicesService,private _router:Router) {}
  gir() {
    this._service.login(this.can.value).subscribe({
      next: (res: any) => {
        localStorage.setItem("logined","true");
        this._router.navigate(['/anasayfa']);
       
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
