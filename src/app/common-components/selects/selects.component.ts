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
    {text: 'Arizona', id: 'AZ', test: 'test'},
    {text: 'California', id: 'CA'},
    {text: 'Colorado', id: 'CO'},
    {text: 'New York', id: 'NY'},
    {text: 'Pennsylvania', id: 'PA'},
  ];

  form: FormGroup = new FormGroup({
    test: new FormControl(this.options[3]),
  });


  private optionClick(event) {
    // Get rid of the DOMStringMap shallow copying and set the data to the formControl
    const test = Object.assign({}, event.target.dataset);
    this.form.setValue({ test });

    // Remove the event document listener
    this.listenerFn();
    this.open = false;
  }

  private onClick(event) {
    // If select dropdown is not open don't add a new/another document event listener
    if (this.open !== true) {
      this.listenerFn = this.renderer.listen('document', 'mousedown', (event) => this.documentClicked(event));
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
