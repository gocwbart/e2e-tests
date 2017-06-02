import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MdlTableComponent } from './mdl-table.component';

const routes: Route[] = [
  {
    path: '',
    component: MdlTableComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
