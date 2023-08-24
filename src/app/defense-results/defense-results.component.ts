import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-defense-results',
  templateUrl: './defense-results.component.html',
  styleUrls: ['./defense-results.component.css']
})
export class DefenseResultsComponent {

  firstType = 'none';
  secondType = 'none';

  firstSelected(type: string) {
    this.firstType = type;
  }

  secondSelected(type: string) {
    this.secondType = type;
  }

}
