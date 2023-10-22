import { Component, OnInit } from '@angular/core';
import { CsvService } from '../csv.service';
import { Song } from '../song.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent{
  songs: Song[] = [];
  selectedButtonText: string = '';

  constructor(private csvService: CsvService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.csvService.getCSVData().subscribe(data => {
      this.songs = data;
      // Perform any operations you need with the fetched data here
    });

    this.route.queryParams.subscribe(params => {
      // Access the value of the 'buttonClicked' from the 2nd page
      this.selectedButtonText = params['buttonClicked'];
      // Now you can use this.selectedButtonText in your component!!
    });

  }

  //filter songs here
  
}