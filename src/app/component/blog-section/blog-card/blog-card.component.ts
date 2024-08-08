import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tag97-blog-card',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent implements OnChanges {
  @Input() id!: string;
  @Input() title!: string;
  @Input() image!: string;
  @Input() category!: string;
  @Input() link!: string;
  @Input() updatedDate!: string;

  public blogDate!: Date;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['updatedDate'] && this.updatedDate) {
      const timestamp = Number(this.updatedDate);
      this.blogDate = new Date(timestamp);
    }
  }
}
