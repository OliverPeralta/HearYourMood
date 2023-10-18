import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageComponent } from './first-page.component';



describe('FirstPageComponent', () => {
  let component: FirstPageComponent;
  let fixture: ComponentFixture<FirstPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstPageComponent]
    });
    fixture = TestBed.createComponent(FirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MoreOptionsComponent } from '../more-options/more-options.component';

// other imports

@NgModule({
  declarations: [

  ],
  imports: [
    // Other modules
    MatTooltipModule,
  ],
})
export class YourModule { }



