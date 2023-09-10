import { Component,Input } from '@angular/core';
import { TypeSelectorComponent } from '../type-selector/type-selector.component';

@Component({
  selector: 'app-attack-results',
  templateUrl: './attack-results.component.html',
  styleUrls: ['./attack-results.component.css']
})
export class AttackResultsComponent {
  firstType = 'none';

  firstSelected(type: string) {
    this.firstType = type;
  }
}
