import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routing } from './ng2-smart-table-example.router';

import { Ng2SmartTableExampleComponent } from './ng2-smart-table-example.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    Ng2SmartTableExampleComponent
  ],
  bootstrap: [
    Ng2SmartTableExampleComponent
  ]
})
export class Ng2SmartTableExampleModule {}
