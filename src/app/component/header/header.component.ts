import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tag97-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public toggleMenu = false;
  public isScrolled = false;
  public activeLink = 'Home';
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  public menuItem = ['Home', 'About', 'PortFolio', 'Services', 'Contact'];

  public navigateAndClose(link: string) {
    const element = document.getElementById(link);
    if (element) {
      this.activeLink = link;
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
    if (this.toggleMenu) {
      this.toggleMenu = false;
    }
  }
}
