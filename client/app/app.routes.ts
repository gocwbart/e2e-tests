import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'schools'},
  { path: 'schools', loadChildren: 'app/schools/schools.module#SchoolsModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);
