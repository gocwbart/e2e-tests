import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'profile'},
  { loadChildren: 'app/profile/profile.module#ProfileModule', path: 'profile' },
  { loadChildren: 'app/schools/schools.module#SchoolsModule', path: 'schools' },
  { loadChildren: 'app/ng2-smart-table-example/ng2-smart-table-example.module#Ng2SmartTableExampleModule', path: 'table' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);
