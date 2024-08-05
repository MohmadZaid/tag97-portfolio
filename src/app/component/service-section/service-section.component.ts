import { Component } from '@angular/core';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({
  selector: 'tag97-service-section',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.scss',
})
export class ServiceSectionComponent {}
