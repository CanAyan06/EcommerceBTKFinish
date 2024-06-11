import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServicesService } from '../services.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers:[ServicesService]
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
    returnSecureToken:new FormControl(true)
  });

  constructor(private _service: ServicesService,private _router:Router) {}

  register() {
    this._service.register(this.form.value).subscribe({
      next:(res)=> {
        alert("Kayıt Başarılı");
        this._router.navigateByUrl("login");
      },
      error:(err) => {
        alert("Kayıt Başarısız");
      }
    });
    
  }
}
