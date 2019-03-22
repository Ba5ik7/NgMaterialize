import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'md-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  
  @Input() buttonClasses: string = 'btn';
  @Input() buttonId: string;
  @Input() buttonSubmit: boolean = false;
  @Input() buttonText: string;

  @Input() icon: string = 'none';
  @Input() iconClasses: string = 'right';

  @Output() clicked = new EventEmitter<object>();

  private onClick(event) {
    console.log('Button Clicked', event);
    this.clicked.emit(event);
  }

  constructor() { }
}
