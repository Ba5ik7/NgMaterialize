import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'md-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  @Input() buttonSubmit: boolean = false;
  @Input() classes: string = 'btn';
  @Input() icon: string = 'none';
  @Input() iconClasses: string = 'right';
  @Input() text: string;

  @Output() clicked = new EventEmitter<object>();

  constructor() { }

  private onClick(event) {
    console.log('Button Clicked', event);
    this.clicked.emit(event);
  }
}
