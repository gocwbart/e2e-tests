import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';

import { BackendDataService } from '../core/backendData.service';
import { MdlTableComponent } from './mdl-table.component';
import { routing } from './mdl-table.router';

@NgModule({
  imports: [
    CommonModule,
    MdlModule,
    routing
  ],
  providers: [
    BackendDataService
  ],
  declarations: [
    MdlTableComponent
  ],
  bootstrap: [
    MdlTableComponent
  ]
})
export class MdlTableModule {}
