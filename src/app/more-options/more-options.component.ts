import { Component } from '@angular/core';

@Component({
  selector: 'app-more-options',
  templateUrl: './more-options.component.html',
  styleUrls: ['./more-options.component.css']
})

export class MoreOptionsComponent {
  showMore: boolean = false;

  toggleMore() {
    this.showMore = !this.showMore;
  }
}
