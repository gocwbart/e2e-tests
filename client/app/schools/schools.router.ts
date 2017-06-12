import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SchoolsComponent } from './schools.component';

const routes: Route[] = [
  {
    path: '',
    component: SchoolsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
