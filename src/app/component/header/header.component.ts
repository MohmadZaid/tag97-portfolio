import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'tag97-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private elRef = inject(ElementRef);
  public toggleMenu = false;
  public isScrolled = false;
  public activeLink = 'Home';
  observer!: IntersectionObserver;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.observeSections();
  }

  public menuItem = [
    'Home',
    'About',
    'Portfolio',
    'Services',
    'Blog',
    'Contact',
  ];

  ngOnInit(): void {
    this.observeSections();
  }

  private observeSections() {
    const sections = document.querySelectorAll('.section');
    if (sections.length > 0) {
      sections.forEach((section: any) => {
        if (!this.observer) {
          this.initIntersectionObserver();
        }
        this.observer.observe(section);
      });
    }
  }

  public navigateAndClose(link: string) {
    if (this.router.url.split('#')[0] !== '/') {
      this.router
        .navigate(['/'], { fragment: link, skipLocationChange: true })
        .then(() => {
          this.scrollToFragment(link);
        });
    } else {
      this.scrollToFragment(link);
    }
    if (this.toggleMenu) {
      this.toggleMenu = false;
    }
  }

  private scrollToFragment(link: string) {
    const element = document.getElementById(link);
    if (element) {
      this.activeLink = link;
      element.scrollIntoView({
        behavior: 'smooth',
      });
      setTimeout(() => {
        this.router.navigate([''], { fragment: link });
      }, 1000);
    }
  }

  initIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust threshold as needed
    };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeLink = entry.target.id;
        }
      });
    }, options);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
