import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';

import { SchoolsComponent } from './schools.component';
import { routing } from './schools.router';

@NgModule({
  imports: [
    CommonModule,
    MdlModule,
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