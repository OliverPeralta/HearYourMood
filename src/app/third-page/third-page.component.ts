import { Component, OnInit } from '@angular/core';
import { CsvService } from '../csv.service';
import { Song } from '../song.model';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent{
  songs: Song[] = [];

  constructor(private csvService: CsvService) {}

  ngOnInit() {
    this.csvService.getCSVData().subscribe(data => {
      this.songs = data;
      // Perform any operations you need with the fetched data here
    });
  }
}