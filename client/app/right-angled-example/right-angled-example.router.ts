import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RightAngledExampleComponent } from './right-angled-example.component';

const routes: Route[] = [
  {
    path: '',
    component: RightAngledExampleComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
