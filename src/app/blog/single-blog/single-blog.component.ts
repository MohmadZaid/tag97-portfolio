import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseCollection } from '../../../enum/firebase';
import { Blog } from '../../../modal/blog';
import { FirebaseService } from '../../../services/firebase.service';
import { LoaderComponent } from '../../component/loader/loader.component';

@Component({
  selector: 'tag97-single-blog',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.scss',
})
export class SingleBlogComponent implements OnInit {
  private firebaseservice = inject(FirebaseService);
  private route = inject(ActivatedRoute);
  public isLoading = false;
  public blog$!: Observable<Blog>;

  ngOnInit(): void {
    this.isLoading = true;
    const blogId = this.route.snapshot.params['id'];
    this.blog$ = this.firebaseservice.getOne(FirebaseCollection.Blogs, blogId);
    this.isLoading = false;
  }
}
