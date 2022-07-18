import {Component, Input} from '@angular/core';

@Component({
  selector: 'dyn-mfe-some-shared-copmonent',
  templateUrl: './some-shared-copmonent.component.html',
  styleUrls: ['./some-shared-copmonent.component.css'],
})
export class SomeSharedComponent {
  @Input() from = '';
}
