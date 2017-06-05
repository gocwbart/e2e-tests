import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableModule } from '@angular-generic-table/core';

import { BackendDataService } from '../core/backendData.service';
import { AngularGenericTableExampleComponent } from './angular-generic-table-example.component';
import { routing } from './angular-generic-table-example.router';

@NgModule({
  imports: [
    CommonModule,
    GenericTableModule,
    routing
  ],
  providers: [
    BackendDataService
  ],
  declarations: [
    AngularGenericTableExampleComponent
  ],
  bootstrap: [
    AngularGenericTableExampleComponent
  ]
})
export class AngularGenericTableExampleModule {}
