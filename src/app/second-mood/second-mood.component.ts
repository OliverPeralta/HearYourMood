import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-mood',
  templateUrl: './second-mood.component.html',
  styleUrls: ['./second-mood.component.css'],
})
export class SecondMoodComponent implements OnInit {
  selectedFeeling: string = '';
  feelingImageSrc: string = '';
  h1Text: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedFeeling = params['feeling'];
      this.updateImage();
    });
  }
  updateImage() {
    // Update the image source based on the selected feeling
    if (this.selectedFeeling === 'angry') {
      this.feelingImageSrc = 'https://c.tenor.com/8McIGu0Tf_QAAAAj/fire-joypixels.gif';
    } else if (this.selectedFeeling === 'sad') {
      this.feelingImageSrc = 'url_for_sad_image.jpg'; // Replace with the actual URL
    } else if (this.selectedFeeling === 'happy') {
      this.feelingImageSrc = 'https://media4.giphy.com/...'; // URL for the 'happy' feeling
    }

    // Update the h1 text based on the selected feeling
    this.h1Text = 'What has you feeling ' + this.selectedFeeling + '?';
  }

  changeColor(element: HTMLElement) {
    const buttons = document.querySelectorAll('.square-button');
    buttons.forEach(button => button.classList.remove('clicked'));
    element.classList.add('clicked');
  }
}
