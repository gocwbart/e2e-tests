import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SchoolsComponent } from './schools.component';
import { routing } from './schools.routes';

@NgModule({
  imports: [
    CommonModule,
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
