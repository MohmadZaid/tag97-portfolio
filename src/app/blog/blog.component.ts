import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseCollection } from '../../enum/firebase';
import { Blog } from '../../modal/blog';
import { FirebaseService } from '../../services/firebase.service';
import { BlogCardComponent } from '../component/blog-section/blog-card/blog-card.component';
import { LoaderComponent } from '../component/loader/loader.component';

@Component({
  selector: 'tag97-blog',
  standalone: true,
  imports: [BlogCardComponent, CommonModule, LoaderComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  isloading = false;
  private fbService = inject(FirebaseService);
  blogs$!: Observable<Blog[]>;

  ngOnInit(): void {
    this.isloading = true;
    this.blogs$ = this.fbService.getAll<Blog>(FirebaseCollection.Blogs);
    setTimeout(() => {
      this.isloading = false;
    }, 1000);
  }
}
