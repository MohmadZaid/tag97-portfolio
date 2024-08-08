import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { FirebaseCollection } from '../../../enum/firebase';
import { Blog } from '../../../modal/blog';
import { FirebaseService } from '../../../services/firebase.service';
import { BlogCardComponent } from './blog-card/blog-card.component';

@Component({
  selector: 'tag97-blog-section',
  standalone: true,
  imports: [BlogCardComponent, CommonModule, RouterLink],
  templateUrl: './blog-section.component.html',
  styleUrl: './blog-section.component.scss',
})
export class BlogSectionComponent implements OnInit {
  private fbService = inject(FirebaseService);
  blogs$!: Observable<Blog[]>;

  ngOnInit(): void {
    this.blogs$ = this.fbService
      .getAll<Blog>(FirebaseCollection.Blogs)
      .pipe(map((blogs) => blogs.slice(0, 3)));
  }
}
