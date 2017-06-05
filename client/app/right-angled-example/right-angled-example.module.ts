import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdlModule } from '@angular-mdl/core';
import { RTModule } from 'right-angled';

import { BackendDataService } from '../core/backendData.service';
import { RightAngledExampleComponent } from './right-angled-example.component';
import { routing } from './right-angled-example.router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdlModule,
    RTModule,
    routing
  ],
  providers: [
    BackendDataService
  ],
  declarations: [
    RightAngledExampleComponent
  ],
  bootstrap: [
    RightAngledExampleComponent
  ]
})
export class RightAngledExampleModule {}
