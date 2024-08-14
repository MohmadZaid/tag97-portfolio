import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'tag97-technology-card',
  standalone: true,
  imports: [],
  templateUrl: './technology-card.component.html',
  styleUrl: './technology-card.component.scss'
})
export class TechnologyCardComponent {
@Input() imageUrl!:string
@Input() name!:string
}
