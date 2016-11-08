import { Component } from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'gym-home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  // TypeScript public modifiers
  constructor(public appState: AppState) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
  }
}
