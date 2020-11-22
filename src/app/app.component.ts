import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.scss']
})
export class AppComponent {
  title = 'sample';
  tog = false;
  showme = true;
  showFoot: boolean = true;

  theme() {
    this.showme = !this.showme;
  }

  toggle() {
    this.tog = !this.tog;
  }

  // constructor(private library: FaIconLibrary) {

  // }
}
