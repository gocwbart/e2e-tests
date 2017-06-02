import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgxDatatableComponent } from './ngx-datatable.component';

const routes: Route[] = [
  {
    path: '',
    component: NgxDatatableComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
