import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { routing } from './profile.router';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    ProfileComponent
  ],
  bootstrap: [
    ProfileComponent
  ]
})
export class ProfileModule {}
