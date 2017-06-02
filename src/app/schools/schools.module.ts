import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SchoolsComponent } from './schools.component';
import { routing } from './schools.router';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    routing
  ],
  declarations: [
    SchoolsComponent
  ],
  bootstrap: [
    SchoolsComponent
  ]
})
export class SchoolsModule {}
