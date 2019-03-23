import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'md-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class SelectsComponent {

  open: boolean = false;
  listenerFn: Function;

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
