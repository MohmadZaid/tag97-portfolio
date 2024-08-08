import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tag97-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  private router = inject(Router);

  navigate(link: string) {
    this.router.navigate([''], { fragment: link });
  }
}
