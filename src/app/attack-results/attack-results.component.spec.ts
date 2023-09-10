import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackResultsComponent } from './attack-results.component';

describe('AttackResultsComponent', () => {
  let component: AttackResultsComponent;
  let fixture: ComponentFixture<AttackResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttackResultsComponent]
    });
    fixture = TestBed.createComponent(AttackResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
