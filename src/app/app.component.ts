import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ShoeComponent } from './shoe/shoe.component';
import { ComputerComponent } from './computer/computer.component';
import { BegenComponent } from './begen/begen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ShoeComponent,RouterModule,ComputerComponent,BegenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
