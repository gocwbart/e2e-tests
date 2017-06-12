import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Route[] = [
  {
    path: '',
    component: ProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
