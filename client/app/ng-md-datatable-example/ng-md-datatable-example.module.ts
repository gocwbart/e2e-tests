import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdDataTableModule } from 'ng2-md-datatable';

import { BackendDataService } from '../core/backendData.service';
import { NgMdDatatableExampleComponent } from './ng-md-datatable-example.component';
import { routing } from './ng-md-datatable-example.router';

@NgModule({
  imports: [
    CommonModule,
    MdDataTableModule,
    routing
  ],
  providers: [
    BackendDataService
  ],
  declarations: [
    NgMdDatatableExampleComponent
  ],
  bootstrap: [
    NgMdDatatableExampleComponent
  ]
})
export class NgMdDatatableExampleModule {}
