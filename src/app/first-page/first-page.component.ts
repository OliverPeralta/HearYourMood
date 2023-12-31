import { Component } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {

  isClicked: boolean = false;

  showMore: boolean = false;

  toggleMoreOptions() {
    this.showMore = !this.showMore;
    this.isClicked = !this.isClicked;
  }
}
