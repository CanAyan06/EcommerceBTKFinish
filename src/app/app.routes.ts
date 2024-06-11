import { Routes } from '@angular/router';
import { ShoeComponent } from './shoe/shoe.component';
import { WatchComponent } from './watch/watch.component';
import { DressComponent } from './dress/dress.component';
import { PhoneComponent } from './phone/phone.component';
import { ComputerComponent } from './computer/computer.component';
import { SportComponent } from './sport/sport.component';
import { CarComponent } from './car/car.component';
import { AboutComponent } from './about/about.component';
import { SepetComponent } from './sepet/sepet.component';
import { PaymentComponent } from './payment/payment.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { CommunicationComponent } from './communication/communication.component';
import { TruckComponent } from './truck/truck.component';
import { AlComponent } from './al/al.component';
import { LogComponent } from './log/log.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';
import { UrunComponent } from './urun/urun.component';
import { CompletedpayComponent } from './completedpay/completedpay.component';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full' ,},
    {path:'urun',component:UrunComponent},
    {path:'login',component:LogComponent},
    {path:'register',component:RegisterComponent},
    {path:'anasayfa',component:AnasayfaComponent,canActivate:[authGuard]},
    {path:'ayakkabı', component:ShoeComponent},
    {path:'saat', component:WatchComponent},
    {path:'elbise',component:DressComponent},
    {path:'telefon',component:PhoneComponent},
    {path:'bilgisayar',component:ComputerComponent},
    {path:'spor',component:SportComponent},
    {path:'car',component:CarComponent},
    {path:'about',component:AboutComponent},
    {path:'sepet',component:SepetComponent},
    {path:'ödeme',component:PaymentComponent},
    {path:'tamamlandı',component:CompletedpayComponent},
    {path:'iletişim',component:CommunicationComponent},
    {path:'kargo',component:TruckComponent},
    {path:'al',component:AlComponent}, 
    {path:'**',component:CarComponent},
];
