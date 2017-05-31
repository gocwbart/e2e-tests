import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'weather'},
  { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'dashboard' },
  { loadChildren: 'app/profile/profile.module#ProfileModule', path: 'profile' },
  { loadChildren: 'app/weather/weather.module#WeatherModule', path: 'weather' },
  { loadChildren: 'app/ng2-smart-table-example/ng2-smart-table-example.module#Ng2SmartTableExampleModule', path: 'table' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);
