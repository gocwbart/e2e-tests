import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';

import { MdlTableComponent } from './mdl-table.component';
import { routing } from './mdl-table.router';

@NgModule({
  imports: [
    CommonModule,
    MdlModule,
    routing
  ],
  declarations: [
    MdlTableComponent
  ],
  bootstrap: [
    MdlTableComponent
  ]
})
export class MdlTableModule {}
