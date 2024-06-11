import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { sliderdata } from './sliderdata.const';

@Component({
  selector: 'app-sliders',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sliders.component.html',
  styleUrl: './sliders.component.css'
})
export class SlidersComponent {
  sliderdata=sliderdata;

}
