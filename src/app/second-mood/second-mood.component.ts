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
  buttonText: string[] = [];
  secondMood: string = '';
  selectedButtonText: string = '';

  feelingToButtonLabel: { [key: string]: string[] } = {
    angry: ['Failed my exam', 'Partner dumped me', 'Just got fired'],
    sad: [
      'Partner and I broke up',
      'Mourning the loss of someone',
      'Just feeling down today',
    ],
    happy: [
      'Having a good day',
      'Accomplished something great',
      'Going on vacation',
    ],
    confident: ['Going on a date tonight', 'Accomplished something great'],
    sleepy: ['Pulled an all-nighter', "It's gloomy outside"],
    studious: [
      'Studying for an upcoming exam',
      'Doing homework',
      'Reading a good book',
    ],
    relaxed: [
      'Getting ready for yoga',
      'Just taking it slow',
      'Finished all of my responsibilities',
    ],
    celebratory: ['Celebrating a birthday', 'Night out'],
    anxious: [
      'Worried about an upcoming exam',
      'Going on a date tonight',
      'Just feeling anxious',
    ],
    romantic: ['Going on a date tonight', "I'm in love"],
    bored: ['Got nothing to do', 'Alone in my room'],
    unsure: [
      'Looking for good vibes',
      'Looking for chill vibes',
      'Looking for hype vibes',
    ],
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.selectedFeeling = params['feeling'];
      this.updateImage();
    });
  }
  updateImage() {
    if (this.selectedFeeling === 'angry') {
      this.feelingImageSrc =
        'https://c.tenor.com/8McIGu0Tf_QAAAAj/fire-joypixels.gif';
    } else if (this.selectedFeeling === 'sad') {
      this.feelingImageSrc =
        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWMxaXp4bmZ6cGVremN3MmRjOGVvMmwwY3MzMmIzY24zdTUzcnE5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/OUkOIRFZU5MnlQcGX6/giphy.gif';
    } else if (this.selectedFeeling === 'happy') {
      this.feelingImageSrc =
        'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXo0M25hdWt6bDN6Y3JlazZzamExOXpuNDQ0Mmg0YXRzOHI1b21kcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XBGBrBHc2i3iRaWi6d/giphy.gif';
    } else if (this.selectedFeeling == 'confident') {
      this.feelingImageSrc =
        'https://64.media.tumblr.com/3d27daad028307a05df767065c2baeee/tumblr_mo35preJ6e1rgpyeqo1_250.gif';
    } else if (this.selectedFeeling == 'sleepy') {
      this.feelingImageSrc =
        'https://i.pinimg.com/originals/61/f1/24/61f12406b4f0f01e4354e182a0533b36.gif';
    } else if (this.selectedFeeling == 'studious') {
      this.feelingImageSrc =
        'https://media.tenor.com/8plhmX7JP9YAAAAC/study.gif';
    } else if (this.selectedFeeling === 'relaxed') {
      this.feelingImageSrc =
        'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnA3Z3lwNWo5cHJhNmVpcWtmd2ZlNndhdDA3cXg0aTl1NHQ3OG1obSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/s1qPesR3kciW9qj9Cw/giphy.gif';
    } else if (this.selectedFeeling === 'celebratory') {
      this.feelingImageSrc =
        'https://media.tenor.com/cxTcj3HA0CsAAAAd/mochi-peach.gif';
    } else if (this.selectedFeeling === 'anxious') {
      this.feelingImageSrc =
        'https://images.squarespace-cdn.com/content/v1/5c92caa4a09a7e3ffc9e2f29/1556466261526-9V1UTXCG6QW8DH4E1CIM/sunday+4.gif';
    } else if (this.selectedFeeling === 'romantic') {
      this.feelingImageSrc =
        'https://media.tenor.com/ZlndAzfwx80AAAAi/kiss-bubu-dudu.gif';
    } else if (this.selectedFeeling === 'bored') {
      this.feelingImageSrc =
        'https://media.tenor.com/9DjJ4jUWIBoAAAAi/chabo-days-deer.gif';
    } else if (this.selectedFeeling === 'unsure') {
      this.feelingImageSrc =
        'https://media.tenor.com/FwNcjKpHAvcAAAAi/shrug-molang.gif';
    }

    this.h1Text = 'What has you feeling ' + this.selectedFeeling + '?';
    this.buttonText = this.feelingToButtonLabel[this.selectedFeeling] || [];
  }

  changeColor(event: MouseEvent) {
    const button = event.target as HTMLElement;
    const buttons = document.querySelectorAll('.square-button');
    buttons.forEach((btn) => btn.classList.remove('clicked'));
    button.classList.add('clicked');
    this.secondMood = button.textContent || '';
  }
}
