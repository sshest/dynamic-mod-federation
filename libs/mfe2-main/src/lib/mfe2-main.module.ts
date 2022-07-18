import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mfe2MainComponent } from './mfe2-main/mfe2-main.component';
import {SharedUiModule} from "@dyn-mfe/shared/ui";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: Mfe2MainComponent
      }
    ])
  ],
  declarations: [Mfe2MainComponent],
})
export class Mfe2MainModule {}
