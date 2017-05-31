import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Ng2SmartTableExampleComponent } from './ng2-smart-table-example.component';

const routes: Route[] = [
  {
    path: '',
    component: Ng2SmartTableExampleComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
