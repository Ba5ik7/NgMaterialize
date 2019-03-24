import { Component, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'md-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class SelectsComponent {

  open: boolean = false;
  listenerFn: Function;

  defaultOptionText: string = 'Select A Value';
  labelText: string = 'Materialize Select';

  options = [
    {text: 'Arizona', id: 'AZ'},
    {text: 'California', id: 'CA'},
    {text: 'Colorado', id: 'CO'},
    {text: 'New York', id: 'NY'},
    {text: 'Pennsylvania', id: 'PA'},
  ];

  form: FormGroup = new FormGroup({
    test: new FormControl(this.options[3]),
  });


  private optionClick(event) {
    console.log('optionClick', event);
    // Close the dropdown
    this.open = false;
    // Remove the event document listener
    this.listenerFn();
  }

  private onClick(event) {
    // If select dropdown is not open don't add a new/another document event listener
    if (this.open !== true) {
      this.listenerFn = this.renderer.listen('document', 'mousedown', (event) => { this.documentClicked(event); });
      this.open = true;
    }
  }

  private documentClicked(event) {
    const hasDropdownEl = event.target.closest('.dropdown-content');
    if (hasDropdownEl == null) {
      this.open = false;
      // Remove the event document listener
      this.listenerFn();
    }
  }

  constructor(public renderer: Renderer2) { }
}
