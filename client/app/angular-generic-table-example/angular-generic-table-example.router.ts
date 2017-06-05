import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AngularGenericTableExampleComponent } from './angular-generic-table-example.component';

const routes: Route[] = [
  {
    path: '',
    component: AngularGenericTableExampleComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
