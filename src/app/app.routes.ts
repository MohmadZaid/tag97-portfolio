import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { SingleBlogComponent } from './blog/single-blog/single-blog.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog/:id',
    component: SingleBlogComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
