import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'md-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']
})
export class RadioButtonsComponent {

  @Input() formControlName: string = 'test';
  @Input() control: FormControl = new FormControl();
  @Input() ratioGroup: FormGroup = new FormGroup({ test: this.control });

  @Input() radios: Array<object> = [{ value: 'test_1', id: 'test_1', text: 'Test One' }, { value: 'test_2', id: 'test_2', text: 'Test Two' }];
  @Input() ratioClasses: string;
 
  @Input() wrapperClasses: string = 'col s12 m3';

  private onChange(event) {
    console.log(event);
    console.log(this.control);
    console.log(this.ratioGroup);
  }

  constructor() { }
}
