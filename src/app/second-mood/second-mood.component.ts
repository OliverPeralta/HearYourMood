import { Component } from '@angular/core';

@Component({
  selector: 'app-second-mood',
  templateUrl: './second-mood.component.html',
  styleUrls: ['./second-mood.component.css'],
})
export class SecondMoodComponent {

  changeColor(element: HTMLElement) {
    const buttons = document.querySelectorAll('.square-button');
    buttons.forEach(button => button.classList.remove('clicked'));
    element.classList.add('clicked');
  }
}
