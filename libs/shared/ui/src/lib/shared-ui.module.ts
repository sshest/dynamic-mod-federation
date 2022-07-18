import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeSharedComponent } from './some-shared-copmonent/some-shared-copmonent.component';

@NgModule({
    imports: [CommonModule],
    declarations: [SomeSharedComponent],
    exports: [
        SomeSharedComponent
    ]
})
export class SharedUiModule {}
