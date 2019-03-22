import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'md-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.scss']
})
export class InputFieldsComponent {

  @Input() control: FormControl = new FormControl('');

  @Input() helperText: string;
  @Input() helperTextClasses: string;

  @Input() labelClasses: string;
  @Input() labelText: string = 'Label Text Default';

  @Input() inputId: string;
  @Input() inputType: string = 'text';
  @Input() inputClasses: string = 'validate';
  
  @Input() wrapperClasses: string = 'col s12';

  inputModel: any = '';
  isActive: boolean;

  private onBlur(event) {
    console.log(this.control);
    
    this.isActive = this.control.value !== '';
  }

  private onFocus(event) {
    this.isActive = true;
  }

  constructor() { }
}
