import { Component, OnInit } from '@angular/core';
import { CsvService } from '../csv.service';
import { Song } from '../song.model';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css'],
})
export class ThirdPageComponent {
  selectedFeeling: string = '';
  feelingImageSrc: string = '';
  secondMood: string = '';
  songs: Song[] = [];
  realSongs: any[] = [];
  selectedButtonText: string = '';
  dataSource: MatTableDataSource<any>;
  papa: any;
  displayedColumns: string[] = [
    'Title',
    'Artist',
    'Genre',
    'Duration',
  ];

  genres: { [key: string]: string[] } = {
    angry: ['Angry'],
    sad: ['Gloomy', 'Breakup', 'Failed', 'Fired', 'Mourning', 'Depressed'],
    happy: ['Vacation', 'GoodDay', 'Finished'],
    confident: ['Success', 'GoodDay'],
    sleepy: ['AllNighter'],
    studious: ['Exam', 'Homework', 'Reading'],
    relaxed: ['Reading', 'Yoga', 'Slow'],
    celebratory: ['NightOut', 'Birthday'],
    anxious: ['Anxious'],
    romantic: ['Crushing'],
    bored: ['Bored', 'Alone'],
    unsure: [
      'Looking for good vibes',
      'Looking for chill vibes',
      'Looking for hype vibes',
    ],
  };

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

  constructor(private csvService: CsvService, private route: ActivatedRoute) {
    this.dataSource = new MatTableDataSource(this.songs);
  }
<<<<<<< HEAD
=======

  playlistName = 'My Mix';

  clearInput() {
    this.playlistName = '';
  }
>>>>>>> 3c181e1 (affordable playlist title changee)

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.selectedFeeling = params['buttonClicked'];
      this.secondMood = params['secondMood'];
      this.secondMood = decodeURIComponent(this.secondMood);
      this.updateImage();
    });
    this.csvService.getCSVData().subscribe((data) => {
      this.songs = data;
      let i = 0;
      if (this.selectedFeeling === 'angry') {
        for (i = 0; i < this.songs.length; i++) {
          if (this.secondMood == '') {
            if (this.songs.at(i)?.mood.includes("Failed") || this.songs.at(i)?.mood.includes("Breakup") ||
            this.songs.at(i)?.mood.includes("Fired")) {
              this.realSongs.push(this.songs.at(i));
            }
          }
          else {
            if (this.songs.at(i)?.mood.includes(this.secondMood)) {
              this.realSongs.push(this.songs.at(i));
            }
          }
        }
      } else if (this.selectedFeeling === 'sad') {
        for (i = 0; i < this.songs.length; i++) {
          if (this.secondMood == '') {
            if (this.songs.at(i)?.mood.includes("Breakup") ||
            this.songs.at(i)?.mood.includes("Mourning") || this.songs.at(i)?.mood.includes("Depressed")) {
              this.realSongs.push(this.songs.at(i));
            }
          }
          else {
            if (this.songs.at(i)?.mood.includes(this.secondMood)) {
              this.realSongs.push(this.songs.at(i));
            }
          }
        }
      } else if (this.selectedFeeling === 'happy') {
        for (i = 0; i < this.songs.length; i++) {
          if (this.secondMood == '') {
            for (i = 0; i < this.songs.length; i++) {
              if (this.songs.at(i)?.mood.includes("Vacation") || this.songs.at(i)?.mood.includes("GoodDay") ||
                this.songs.at(i)?.mood.includes("Success")) {
                this.realSongs.push(this.songs.at(i));
              }
            }
          }
          else {
            if (this.songs.at(i)?.mood.includes(this.secondMood)) {
              this.realSongs.push(this.songs.at(i));
            }
          }
          
        }
      } else if (this.selectedFeeling === 'confident') {

        for (i = 0; i < this.songs.length; i++) {
          if (this.secondMood == '') {
            if (this.songs.at(i)?.mood.includes("Success") || this.songs.at(i)?.mood.includes("DateNight")) {
              this.realSongs.push(this.songs.at(i));
            }
          }
          else {
            if (this.songs.at(i)?.mood.includes(this.secondMood)) {
              this.realSongs.push(this.songs.at(i));
            }
          }
        }
      } else if (this.selectedFeeling === 'sleepy') {
        for (i = 0; i < this.songs.length; i++) {
          if (this.secondMood == '') {
            if (this.songs.at(i)?.mood.includes("AllNighter") || this.songs.at(i)?.mood.includes("Gloomy")) {
              this.realSongs.push(this.songs.at(i));
            }
          }
          else {
            if (this.songs.at(i)?.mood.includes(this.secondMood)) {
              this.realSongs.push(this.songs.at(i));
            }
          }
        }
      } else if (this.selectedFeeling === 'studious') {
        for (i = 0; i < this.songs.length; i++) {
          if (this.secondMood == '') {
            if (this.songs.at(i)?.mood.includes("Exam") || this.songs.at(i)?.mood.includes("Homework") ||
                this.songs.at(i)?.mood.includes("Reading")) {
                this.realSongs.push(this.songs.at(i));
              }
          }
          else {
            if (this.songs.at(i)?.mood.includes(this.secondMood)) {
              this.realSongs.push(this.songs.at(i));
            }
          }
        }
      } else if (this.selectedFeeling === 'relaxed') {
        for (i = 0; i < this.songs.length; i++) {
          if (this.secondMood == '') {
            if (this.songs.at(i)?.mood.includes("Finished") || this.songs.at(i)?.mood.includes("Yoga") ||
              this.songs.at(i)?.mood.includes("Slow")) {
              this.realSongs.push(this.songs.at(i));
            }
          }
          else {
            if (this.songs.at(i)?.mood.includes(this.secondMood)) {
              this.realSongs.push(this.songs.at(i));
            }
          }
        }
      } else if (this.selectedFeeling === 'celebratory') {
        for (i = 0; i < this.songs.length; i++) {
          if (this.secondMood == '') {
            if (this.songs.at(i)?.mood.includes("NightOut") || this.songs.at(i)?.mood.includes("Birthday")) {
              this.realSongs.push(this.songs.at(i));
            }
          }
          else {
            if (this.songs.at(i)?.mood.includes(this.secondMood)) {
              this.realSongs.push(this.songs.at(i));
            }
          }
        }
      } else if (this.selectedFeeling === 'anxious') {
        for (i = 0; i < this.songs.length; i++) {
          if (this.secondMood == '') {
            if (this.songs.at(i)?.mood.includes("Exam") || this.songs.at(i)?.mood.includes("DateNight")
             || this.songs.at(i)?.mood.includes("Anxious")) {
              this.realSongs.push(this.songs.at(i));
            }
          }
          else {
            if (this.songs.at(i)?.mood.includes(this.secondMood)) {
              this.realSongs.push(this.songs.at(i));
            }
          }
        }
      } else if (this.selectedFeeling === 'romantic') {
        for (i = 0; i < this.songs.length; i++) {
          if (this.secondMood == '') {
            if (this.songs.at(i)?.mood.includes("Crushing") || this.songs.at(i)?.mood.includes("DateNight")) {
              this.realSongs.push(this.songs.at(i));
            }
          }
          else {
            if (this.songs.at(i)?.mood.includes(this.secondMood)) {
              this.realSongs.push(this.songs.at(i));
            }
          }
        }
      } else if (this.selectedFeeling === 'bored') {
        for (i = 0; i < this.songs.length; i++) {
          if (this.secondMood == '') {
            if (this.songs.at(i)?.mood.includes("Bored") || this.songs.at(i)?.mood.includes("Alone")) {
              this.realSongs.push(this.songs.at(i));
            }
          }
          else {
            if (this.songs.at(i)?.mood.includes(this.secondMood)) {
              this.realSongs.push(this.songs.at(i));
            }
          }
        }
      } else if (this.selectedFeeling === 'unsure') {
        for (i = 0; i < this.songs.length; i++) {
          if (this.secondMood == '') {
            this.realSongs = this.songs;
            break;
          }
          else if (this.secondMood == " Looking for good vibes "){
            if (this.songs.at(i)?.mood.includes("GoodDay")) {
                this.realSongs.push(this.songs.at(i));
              }
          }
          else if (this.secondMood == " Looking for chill vibes ") {
            if (this.songs.at(i)?.mood.includes("Gloomy")) {
                this.realSongs.push(this.songs.at(i));
              }
          }
          else if (this.secondMood == " Looking for hype vibes ") {
            if ( this.songs.at(i)?.mood.includes("NightOut")) {
                this.realSongs.push(this.songs.at(i));
              }
          }
        }
      }
      this.dataSource = new MatTableDataSource(this.realSongs);
    });
  }
  updateImage() {
    if (this.selectedFeeling === 'angry') {
      this.feelingImageSrc =
        'https://c.tenor.com/8McIGu0Tf_QAAAAj/fire-joypixels.gif';
      if (this.secondMood === ' ') {
        this.secondMood = '';
      } else if (this.secondMood === ' Failed my exam ') {
        this.secondMood = 'Failed';
      } else if (this.secondMood === ' Just got fired ') {
        this.secondMood = 'Fired';
      } else if (this.secondMood === ' Partner dumped me ') {
        this.secondMood = 'Breakup';
      }
    } else if (this.selectedFeeling === 'sad') {
      this.feelingImageSrc =
        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWMxaXp4bmZ6cGVremN3MmRjOGVvMmwwY3MzMmIzY24zdTUzcnE5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/OUkOIRFZU5MnlQcGX6/giphy.gif';
      if (this.secondMood === ' ') {
        this.secondMood = '';
      } else if (this.secondMood === ' Partner and I broke up ') {
        this.secondMood = 'Breakup';
      } else if (this.secondMood === ' Mourning the loss of someone ') {
        this.secondMood = 'Mourning';
      } else if (this.secondMood === ' Just feeling down today ') {
        this.secondMood = 'Depressed';
      }
    } else if (this.selectedFeeling === 'happy') {
      this.feelingImageSrc =
        'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXo0M25hdWt6bDN6Y3JlazZzamExOXpuNDQ0Mmg0YXRzOHI1b21kcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XBGBrBHc2i3iRaWi6d/giphy.gif';
        if (this.secondMood == ' ') {
          this.secondMood = '';
        }
        else if (this.secondMood === ' Accomplished something great ') {
        this.secondMood = 'Success';
      } else if (this.secondMood === ' Going on vacation ') {
        this.secondMood = 'Vacation';
      } else if (this.secondMood === ' Having a good day ') {
        this.secondMood = 'GoodDay';
      }
    } else if (this.selectedFeeling == 'confident') {
      this.feelingImageSrc =
        'https://64.media.tumblr.com/3d27daad028307a05df767065c2baeee/tumblr_mo35preJ6e1rgpyeqo1_250.gif';
      if (this.secondMood === ' ') {
        this.secondMood = '';
      } else if (this.secondMood === ' Going on a date tonight ') {
        this.secondMood = 'DateNight';
      } else if (this.secondMood === ' Accomplished something great ') {
        this.secondMood = 'Success';
      }
    } else if (this.selectedFeeling == 'sleepy') {
      this.feelingImageSrc =
        'https://i.pinimg.com/originals/61/f1/24/61f12406b4f0f01e4354e182a0533b36.gif';
      if (this.secondMood === ' ') {
        this.secondMood = '';
      } else if (this.secondMood === ' Pulled an all-nighter ') {
        this.secondMood = 'AllNighter';
      }
      else if (this.secondMood === ' It\'s gloomy outside ') {
        this.secondMood = 'Gloomy';
      }
    } else if (this.selectedFeeling == 'studious') {
      this.feelingImageSrc =
        'https://media.tenor.com/8plhmX7JP9YAAAAC/study.gif';
      if (this.secondMood === ' ') {
        this.secondMood = '';
      } else if (this.secondMood === ' Studying for an upcoming exam ') {
        this.secondMood = 'Exam';
      } else if (this.secondMood === ' Doing homework ') {
        this.secondMood = 'Homework';
      } else if (this.secondMood === ' Reading a good book ') {
        this.secondMood = 'Reading';
      }
    } else if (this.selectedFeeling === 'relaxed') {
      this.feelingImageSrc =
        'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnA3Z3lwNWo5cHJhNmVpcWtmd2ZlNndhdDA3cXg0aTl1NHQ3OG1obSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/s1qPesR3kciW9qj9Cw/giphy.gif';
      if (this.secondMood === ' ') {
        this.secondMood = '';
      } else if (this.secondMood === ' Getting ready for yoga ') {
        this.secondMood = 'Yoga';
      } else if (this.secondMood === ' Just taking it slow ') {
        this.secondMood = 'Slow';
      } else if (this.secondMood === ' Finished all of my responsibilities ') {
        this.secondMood = 'Finished';
      }
    } else if (this.selectedFeeling === 'celebratory') {
      this.feelingImageSrc =
        'https://media.tenor.com/cxTcj3HA0CsAAAAd/mochi-peach.gif';
      if (this.secondMood === ' ') {
        this.secondMood = '';
      } else if (this.secondMood === ' Celebrating a birthday ') {
        this.secondMood = 'Birthday';
      } else if (this.secondMood === ' Night out ') {
        this.secondMood = 'NightOut';
      }
    } else if (this.selectedFeeling === 'anxious') {
      this.feelingImageSrc =
        'https://images.squarespace-cdn.com/content/v1/5c92caa4a09a7e3ffc9e2f29/1556466261526-9V1UTXCG6QW8DH4E1CIM/sunday+4.gif';
      if (this.secondMood === '') {
        this.secondMood = '';
      } else if (this.secondMood === ' Worried about an upcoming exam ') {
        this.secondMood = 'Exam';
      } else if (this.secondMood === ' Going on a date tonight ') {
        this.secondMood = 'DateNight';
      } else if (this.secondMood === ' Just feeling anxious ') {
        this.secondMood = 'Anxious';
      }
    } else if (this.selectedFeeling === 'romantic') {
      this.feelingImageSrc =
        'https://media.tenor.com/ZlndAzfwx80AAAAi/kiss-bubu-dudu.gif';
      if (this.secondMood === ' ') {
        this.secondMood = '';
      } else if (this.secondMood === ' Going on a date tonight ') {
        this.secondMood = 'DateNight';
      } else if (this.secondMood === " I'm in love ") {
        this.secondMood = 'Crushing';
      }
    } else if (this.selectedFeeling === 'bored') {
      this.feelingImageSrc =
        'https://media.tenor.com/9DjJ4jUWIBoAAAAi/chabo-days-deer.gif';
      if (this.secondMood === ' ') {
        this.secondMood = '';
      } else if (this.secondMood === ' Got nothing to do ') {
        this.secondMood = 'Bored';
      } else if (this.secondMood === ' Alone in my room ') {
        this.secondMood = 'Alone';
      }
    } else if (this.selectedFeeling === 'unsure') {
      this.feelingImageSrc =
        'https://media.tenor.com/FwNcjKpHAvcAAAAi/shrug-molang.gif';
        if (this.secondMood === ' ') {
          this.secondMood = '';
        } else if (this.secondMood === ' Looking for chill vibes ') {
          this.secondMood = ' Looking for chill vibes ';
        } else if (this.secondMood === ' Looking for good vibes ') {
          this.secondMood = ' Looking for good vibes ';
        }
        else if (this.secondMood === ' Looking for hype vibes ') {
          this.secondMood = ' Looking for hype vibes ';
        }
    }
  }

  //filter songs here
}
