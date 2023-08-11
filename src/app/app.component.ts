import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pokemon-matchups';
firstType = '';
secondType = '';

  firstSelected(type: string) {
    this.firstType = type;
  }

  secondSelected(type: string) {
    this.secondType = type;
  }
}