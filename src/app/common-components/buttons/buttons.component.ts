import { Component, EventEmitter, Input, OnInit,  Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() buttonType: string = 'submit';
  @Input() classes: string = 'btn';
  @Input() text: string = 'Button';

  @Output() clicked = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  private onClick(event) {
    console.log('Button Clicked', event);
    this.clicked.emit(event);
  }

}
