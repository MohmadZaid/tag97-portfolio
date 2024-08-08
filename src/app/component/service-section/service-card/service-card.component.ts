import { Component, Input } from '@angular/core';

@Component({
  selector: 'tag97-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input() title!:string
  @Input() description!:string
  @Input() image!:string
  @Input() imageBg!:string

}
