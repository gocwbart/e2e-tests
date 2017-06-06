import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'profile'},
  { loadChildren: 'app/profile/profile.module#ProfileModule', path: 'profile' },
  { loadChildren: 'app/mdl-table/mdl-table.module#MdlTableModule', path: 'mdl-table' },
  { loadChildren: 'app/ng2-smart-table-example/ng2-smart-table-example.module#Ng2SmartTableExampleModule', path: 'smart-table' },
  { loadChildren: 'app/ngx-datatable/ngx-datatable.module#NgxDatatableExampleModule', path: 'ngx-datatable' },
  { loadChildren: 'app/angular-generic-table-example/angular-generic-table-example.module#AngularGenericTableExampleModule', path: 'angular-generic-table' },
  { loadChildren: 'app/ng-md-datatable-example/ng-md-datatable-example.module#NgMdDatatableExampleModule', path: 'ng-md-datatable' },
  { loadChildren: 'app/right-angled-example/right-angled-example.module#RightAngledExampleModule', path: 'right-angled' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);
