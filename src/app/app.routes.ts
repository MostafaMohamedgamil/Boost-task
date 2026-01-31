import { Routes } from '@angular/router';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/role-selection/role-selection').then((m) => m.RoleSelection),
  },
  {
    path: 'data',
    loadComponent: () => import('./pages/data/data').then((m) => m.Data),
    canActivate: [roleGuard],
  },
//   error route
    {
        path: '**',
        loadComponent: () => import('./pages/error/error').then(m => m.Error)
    }
];
