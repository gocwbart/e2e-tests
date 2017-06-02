import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'profile'},
  { loadChildren: 'app/profile/profile.module#ProfileModule', path: 'profile' },
  { loadChildren: 'app/mdl-table/mdl-table.module#MdlTableModule', path: 'mdl-table' },
  { loadChildren: 'app/ng2-smart-table-example/ng2-smart-table-example.module#Ng2SmartTableExampleModule', path: 'smart-table' },
  { loadChildren: 'app/ngx-datatable/ngx-datatable.module#NgxDatatableExampleModule', path: 'ngx-datatable' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);
