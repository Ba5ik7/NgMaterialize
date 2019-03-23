import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'md-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent {

  @Input() formControlName: string = 'test';
  @Input() control: FormControl = new FormControl();
  @Input() checkboxesGroup: FormGroup = new FormGroup({ test: this.control });

  @Input() checkboxes: Array<object> = [{ id: 'checkboxes_test_1', text: 'Test One' }, { classes: 'filled-in', id: 'checkboxes_test_2', text: 'Test Two' }];

  @Input() labelClasses: string = 'col s12';

  @Input() wrapperClasses: string = 'row';

  private onClick(event) {
    console.log(event);
    console.log(this.control);
    console.log(this.checkboxesGroup);
  }

  constructor() { }
}
