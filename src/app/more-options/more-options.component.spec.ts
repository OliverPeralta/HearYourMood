import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreOptionsComponent } from './more-options.component';

describe('MoreOptionsComponent', () => {
  let component: MoreOptionsComponent;
  let fixture: ComponentFixture<MoreOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreOptionsComponent]
    });
    fixture = TestBed.createComponent(MoreOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
