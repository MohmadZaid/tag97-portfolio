import { Component } from '@angular/core';
import { BlogCardComponent } from './blog-card/blog-card.component';

@Component({
  selector: 'tag97-blog-section',
  standalone: true,
  imports: [BlogCardComponent],
  templateUrl: './blog-section.component.html',
  styleUrl: './blog-section.component.scss',
})
export class BlogSectionComponent {
  blogs = [
    {
      title: 'How to make a website using WordPress',
      category: 'System-administrator',
      image: 'assets/delete/asset1.jpeg',
    },

    {
      title: 'Building brands through customer service',
      category: 'Business Managment',
      image: 'assets/delete/asset2.jpeg',
    },
    {
      title: 'Digital experts get multiple job offers',
      category: 'Business-Managment',
      image: 'assets/delete/asset3.jpeg',
    },
    {
      title: 'How to make a website using WordPress',
      category: 'System-administrator',
      image: 'assets/delete/asset1.jpeg',
    },
  ];
}
