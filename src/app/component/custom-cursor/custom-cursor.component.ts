import { Component, ElementRef, HostListener } from '@angular/core';
@Component({
  selector: 'tag97-custom-cursor',
  standalone: true,
  imports: [],
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.scss',
})
export class CustomCursorComponent {
  constructor(private el: ElementRef) {}

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const ringElement = document.getElementById('cursor');
    if (ringElement) {
      ringElement.style.transform = `translate(${event.clientX - 20}px, ${
        event.clientY - 20
      }px)`;
    }
  }
}
