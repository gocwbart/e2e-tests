import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SchoolsComponent } from './schools.component';

const routes: Route[] = [
  {
    path: '',
    component: SchoolsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
