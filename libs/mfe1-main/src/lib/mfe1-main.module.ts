import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mfe1MainComponent } from './mfe1-main/mfe1-main.component';
import {SharedUiModule} from "@dyn-mfe/shared/ui";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: Mfe1MainComponent
      }
    ])
  ],
  declarations: [Mfe1MainComponent],
})
export class Mfe1MainModule {}
