import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMoodComponent } from './second-mood.component';

describe('SecondMoodComponent', () => {
  let component: SecondMoodComponent;
  let fixture: ComponentFixture<SecondMoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondMoodComponent]
    });
    fixture = TestBed.createComponent(SecondMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
