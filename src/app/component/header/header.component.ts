import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'tag97-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  toggleMenu = false;
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  menuItem = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/',
    },
    {
      name: 'PortFolio',
      link: '/',
    },
    {
      name: 'Services',
      link: '/',
    },
    {
      name: 'Contact',
      link: '/',
    },
  ];
}
