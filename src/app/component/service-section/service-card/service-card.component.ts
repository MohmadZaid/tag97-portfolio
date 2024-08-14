import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'tag97-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
})
export class ServiceCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() imageBg!: string;
  @ViewChild('card', { static: true }) card!: ElementRef<HTMLElement>;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const card = this.card.nativeElement;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    const rotateX = ((yPercent - 50) / 50) * 15; // Adjust rotation range
    const rotateY = ((xPercent - 50) / 50) * -15; // Adjust rotation range

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    const card = this.card.nativeElement;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  }
}
