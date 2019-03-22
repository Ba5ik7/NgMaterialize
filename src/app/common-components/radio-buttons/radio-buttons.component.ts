import { Component, Input } from '@angular/core';

@Component({
  selector: 'md-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']
})
export class RadioButtonsComponent {

  @Input() radios: Array<object> = [{ id: 'test_1', text: 'Test One' }, { id: 'test_2', text: 'Test Two' }];
  @Input() ratioClasses: string;
  @Input() ratioGroup: string = 'test_group';
  
  @Input() wrapperClasses: string = 'block';

  constructor() { }
}
