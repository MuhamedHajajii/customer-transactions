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
      { path: '', redirectTo: 'all-transactions', pathMatch: 'full' },
      {
        path: 'all-transactions',
        loadComponent: () =>
          import(
            './pages/blank-layout/all-transactions/all-transactions.component'
          ).then((e) => e.AllTransactionsComponent),
      },
      {
        path: 'all-customers',
        loadComponent: () =>
          import(
            './pages/blank-layout/all-customers/all-customers.component'
          ).then((e) => e.AllCustomersComponent),
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
