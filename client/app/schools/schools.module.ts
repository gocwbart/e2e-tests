import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';

import { BackendDataService } from '../core/backendData.service';
import { SchoolsComponent } from './schools.component';
import { routing } from './schools.router';

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
    SchoolsComponent
  ],
  bootstrap: [
    SchoolsComponent
  ]
})
export class SchoolsModule {}
