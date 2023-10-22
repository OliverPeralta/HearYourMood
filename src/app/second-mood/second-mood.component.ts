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
      this.feelingImageSrc ='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWMxaXp4bmZ6cGVremN3MmRjOGVvMmwwY3MzMmIzY24zdTUzcnE5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/OUkOIRFZU5MnlQcGX6/giphy.gif';
    } else if (this.selectedFeeling === 'happy') {
      this.feelingImageSrc = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXo0M25hdWt6bDN6Y3JlazZzamExOXpuNDQ0Mmg0YXRzOHI1b21kcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XBGBrBHc2i3iRaWi6d/giphy.gif';
    } else if (this.selectedFeeling == 'confident'){
      this.feelingImageSrc = 'https://64.media.tumblr.com/3d27daad028307a05df767065c2baeee/tumblr_mo35preJ6e1rgpyeqo1_250.gif';
    } else if (this.selectedFeeling == 'sleepy'){
      this.feelingImageSrc = 'https://i.pinimg.com/originals/61/f1/24/61f12406b4f0f01e4354e182a0533b36.gif';
    } else if (this.selectedFeeling == 'studious'){
      this.feelingImageSrc = 'https://media.tenor.com/8plhmX7JP9YAAAAC/study.gif';
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
