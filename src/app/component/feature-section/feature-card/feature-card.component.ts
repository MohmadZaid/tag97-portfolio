import { Component, Input } from '@angular/core';

@Component({
  selector: 'tag97-feature-card',
  standalone: true,
  imports: [],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent {
  @Input() icon!:string
  @Input() title!:string
  @Input() description!:string
  @Input() ringImage!:string

}
