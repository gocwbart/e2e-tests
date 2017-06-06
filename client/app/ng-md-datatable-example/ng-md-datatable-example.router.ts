import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgMdDatatableExampleComponent } from './ng-md-datatable-example.component';

const routes: Route[] = [
  {
    path: '',
    component: NgMdDatatableExampleComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
