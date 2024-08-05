import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tag97-about-section',
  standalone: true,
  imports: [],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  private router = inject(Router);

  navigate(link:string){
    console.log(link);
    
    this.router.navigate([''], { fragment: link });
  }
}
