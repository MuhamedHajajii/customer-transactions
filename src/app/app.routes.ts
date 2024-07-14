import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  // Blank Layout
  {
    path: '',
    loadComponent: () =>
      import('./pages/blank-layout/blank-layout.component').then(
        (e) => e.BlankLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      // home component
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/blank-layout/home/home.component').then(
            (e) => e.HomeComponent
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('../app/core/components/not-found/not-found.component').then(
        (e) => e.NotFoundComponent
      ),
  },
];
