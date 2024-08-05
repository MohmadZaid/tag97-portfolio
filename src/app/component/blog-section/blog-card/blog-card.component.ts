import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tag97-blog-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  @Input() title!: string;
  @Input() image!: string;
  @Input() category!: string;
  @Input() link!: string;
}
