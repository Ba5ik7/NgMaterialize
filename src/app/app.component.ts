import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-materialize';

  private formClick(event) {
    console.log('Form Clicked!', event);
  }
}
