import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MdlModule } from '@angular-mdl/core';

import { BackendDataService } from '../core/backendData.service';
import { NgxDatatableComponent } from './ngx-datatable.component';
import { routing } from './ngx-datatable.router';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    MdlModule,
    routing
  ],
  providers: [
    BackendDataService
  ],
  declarations: [
    NgxDatatableComponent
  ],
  bootstrap: [
    NgxDatatableComponent
  ]
})
export class NgxDatatableExampleModule {}
