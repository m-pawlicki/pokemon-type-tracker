import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenseResultsComponent } from './defense-results.component';

describe('DefenseResultsComponent', () => {
  let component: DefenseResultsComponent;
  let fixture: ComponentFixture<DefenseResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefenseResultsComponent]
    });
    fixture = TestBed.createComponent(DefenseResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
