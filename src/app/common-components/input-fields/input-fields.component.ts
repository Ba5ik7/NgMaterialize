import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'md-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.scss']
})
export class InputFieldsComponent implements OnInit {

  @Input() labelClasses: string;
  @Input() labelText: string = 'Label Text Default';

  @Input() inputId: string;
  @Input() inputType: string = 'text';
  @Input() inputClasses: string = 'validate';
  
  @Input() wrapperClasses: string = 'col s12';

  inputModel: any = '';
  isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  private onBlur(event) {
    this.isActive = this.inputModel !== '';
  }

  private onFocus() {
    this.isActive = true;
  }

}
