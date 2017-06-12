import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'schools'},
  { loadChildren: 'app/schools/schools.module#SchoolsModule', path: 'schools' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);
