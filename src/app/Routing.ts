import { AuthorDetailComponent } from './component/author-detail/author-detail.component';
import { AuthorsComponent } from './component/authors/authors.component';

import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'blog', component: AuthorsComponent },
  { path: 'Details', component: AuthorDetailComponent }
];
