import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Song } from './song.model';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor(private http: HttpClient) { }

  getCSVData(): Observable<Song[]> {
    return this.http.get('assets/files/playlists.csv', { responseType: 'text' }).pipe(
      map((data: string) => {
        const csvArray = data.split('\n');
        const songs: Song[] = [];

        for (let i = 0; i < csvArray.length; i++) {
          const line = csvArray[i].split(',');
          if (line.length === 5) {
            const [title, artist, duration, genre, mood] = line;
            const song = new Song(title, artist, duration, genre, mood);
            songs.push(song);
          }
        }

        return songs;
      })
    );
  }
}
