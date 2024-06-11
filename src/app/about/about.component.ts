import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor() { }

  openPdf(): void {
    const pdfPath = 'https://www.orimi.com/pdf-test.pdf';
    const link = document.createElement('a');
    link.target = "_blank";
    link.href = pdfPath;
    link.download = 'cv.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
}
  

