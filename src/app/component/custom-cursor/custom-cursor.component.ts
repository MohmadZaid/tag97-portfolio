import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'tag97-custom-cursor',
  standalone: true,
  imports: [],
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.scss',
})
export class CustomCursorComponent {
  constructor(private router: Router) {
    // Subscribe to router events to refresh cursor on navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.reinitializeCursor();
      }
    });
  }

  reinitializeCursor() {
    const ringElement = document.getElementById('cursor');
    const dotElement = document.getElementById('dot');

    // Additional logic to reset or refresh the cursor state if needed
    if (ringElement && dotElement) {
      if (ringElement) {
        ringElement.classList.add('lg:block');
      }

      if (dotElement) {
        dotElement.classList.remove(
          'w-20',
          'h-20',
          '-top-4',
          '-left-4',
          'bg-primary/20',
          'dark:bg-secondary/20'
        );
        dotElement.classList.add('top-[14.5px]', 'left-[14.5px]');
      }
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const ringElement = document.getElementById('cursor');
    const dotElement = document.getElementById('dot');
    if (ringElement) {
      ringElement.style.transform = `translate(${event.clientX - 17}px, ${
        event.clientY - 16
      }px)`;
    }
    if (dotElement) {
      dotElement.style.transform = `translate(${event.clientX - 17}px, ${
        event.clientY - 16
      }px)`;
    }
  }

  @HostListener('window:mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    const dotElement = document.getElementById('dot');
    const ringElement = document.getElementById('cursor');
    const target = event.target as HTMLElement;

    if (
      target.tagName.toLowerCase() === 'a' ||
      target.classList.contains('special-cursor')
    ) {
      if (ringElement) {
        ringElement.classList.remove('lg:block');
      }
      if (dotElement) {
        dotElement.classList.remove('top-[14.5px]', 'left-[14.5px]');
        dotElement.classList.add(
          'w-20',
          'h-20',
          '-top-4',
          '-left-4',
          'bg-primary/20',
          'dark:bg-secondary/20'
        );
      }
    }
  }

  @HostListener('window:mouseout', ['$event'])
  onMouseOut(event: MouseEvent) {
    const dotElement = document.getElementById('dot');
    const ringElement = document.getElementById('cursor');
    const target = event.target as HTMLElement;
    if (
      target.tagName.toLowerCase() === 'a' ||
      target.classList.contains('special-cursor')
    ) {
      if (ringElement) {
        ringElement.classList.add('lg:block');
      }

      if (dotElement) {
        dotElement.classList.remove(
          'w-20',
          'h-20',
          '-top-4',
          '-left-4',
          'bg-primary/20',
          'dark:bg-secondary/20'
        );
        dotElement.classList.add('top-[14.5px]', 'left-[14.5px]');
      }
    }
  }
}
