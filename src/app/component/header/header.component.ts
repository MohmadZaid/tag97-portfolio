import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'tag97-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  public toggleMenu = false;
  public isScrolled = false;
  public activeLink = 'Home';
  observer!: IntersectionObserver;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  public menuItem = ['Home', 'About', 'PortFolio', 'Services', 'Contact'];

  constructor(private readonly router: Router) {}
  ngOnInit(): void {
    this.initIntersectionObserver();
    const sections = document.querySelectorAll('.section');
    console.log(sections);
    
    sections.forEach(section => this.observer.observe(section));
  }
  public navigateAndClose(link: string) {
    const element = document.getElementById(link);
    if (element) {
      this.activeLink = link;
      element.scrollIntoView({
        behavior: 'smooth',
      });
      setTimeout(() => {
        this.router.navigate(['/'], { fragment: link });
      }, 1000);
    }
    if (this.toggleMenu) {
      this.toggleMenu = false;
    }
  }


  initIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust threshold as needed
    };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
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
