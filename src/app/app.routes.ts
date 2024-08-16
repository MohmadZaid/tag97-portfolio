import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'blog/:id',
    loadComponent: () =>
      import('./blog/single-blog/single-blog.component').then(
        (m) => m.SingleBlogComponent
      ),
  },
  {
    path: 'terms-and-conditions',
    loadComponent: () =>
      import('./terms-and-conditions/terms-and-conditions.component').then(
        (m) => m.TermsAndConditionsComponent
      ),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./privacy-policy/privacy-policy.component').then(
        (m) => m.PrivacyPolicyComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
