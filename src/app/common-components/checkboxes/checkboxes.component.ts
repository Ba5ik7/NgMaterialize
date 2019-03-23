import { Component, Input } from '@angular/core';

@Component({
  selector: 'md-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent {

  @Input() checkboxes: Array<object> = [{ id: 'checkboxes_test_1', text: 'Test One' }, { classes: 'filled-in', id: 'checkboxes_test_2', text: 'Test Two' }];

  @Input() labelClasses: string = 'col s2';

  @Input() wrapperClasses: string = 'row';

  constructor() { }
}
