import { Component, Renderer2, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'md-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class SelectsComponent implements OnInit {
  
  @ViewChild('someVar') el:ElementRef;

  open: boolean = false;
  listenerFn: Function;

  labelText: string = 'Materialize Select';

  defaultOption: object = { text: 'Select A Value', id: 'default' };
  preSelectOption: object= {text: 'New York', id: 'NY'};
  
  options = [
    {text: 'Arizona', id: 'AZ', test: 'test'},
    {text: 'California', id: 'CA'},
    {text: 'Colorado', id: 'CO'},
    {text: 'New York', id: 'NY'},
    {text: 'Pennsylvania', id: 'PA'},
  ];

  form: FormGroup = new FormGroup({
    test: new FormControl(this.defaultOption),
  });

  ngOnInit() {
    if (this.preSelectOption !== undefined) {
      const test = Object.assign({}, this.preSelectOption);
      this.form.setValue({ test }); 
    }
  }

  private optionSelected(event) {
    const test = Object.assign({}, event.target.dataset);
    this.form.setValue({ test });
    this.closeDropdown();
    this.el.nativeElement.focus();
  }

  private openDropdown(event) {
    if (this.open !== true) {
      const selectedOption = event.target.nextElementSibling.querySelector(`li[data-id=${this.form.value.test.id}]`);
      // Race con Fuck me!!!!
      setTimeout(() => selectedOption.focus(), 100);

      this.listenerFn = this.renderer.listen('document', 'mousedown', (event) => this.documentClicked(event));
      this.open = true;
    }
  }

  private documentClicked(event) {
    const hasDropdownEl = event.target.closest('.dropdown-content');
    if (hasDropdownEl == null) {
      this.closeDropdown();
    }
  }

  private closeDropdown() {
    this.open = false;
    this.listenerFn();
  }

  private arrowUp(event) {
    event.target.previousElementSibling.focus();
  }

  private arrowDown(event) {
    if(event.target.nextElementSibling != null) {
      event.target.nextElementSibling.focus();
    }
  }

  constructor(public renderer: Renderer2) { }
}
