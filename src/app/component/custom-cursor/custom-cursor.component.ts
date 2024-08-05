import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'tag97-custom-cursor',
  standalone: true,
  imports: [],
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.scss',
})
export class CustomCursorComponent {
  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const ringElement = document.getElementById('cursor');
    const dotElement = document.getElementById('dot');
    if (ringElement) {
      ringElement.style.transform = `translate(${event.clientX - 20}px, ${
        event.clientY - 20
      }px)`;
    }
    if (dotElement) {
      dotElement.style.transform = `translate(${event.clientX - 20}px, ${
        event.clientY - 20
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
      target.tagName.toLowerCase() === 'button'
    ) {
      if (ringElement) {
        ringElement.classList.remove('lg:block');
      }
      if (dotElement) {
        dotElement.classList.remove('top-[17px]', 'left-[17px]');
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
      target.tagName.toLowerCase() === 'button'
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
        dotElement.classList.add('top-[17px]', 'left-[17px]');
      }
    }
  }
}
