import { Component } from '@angular/core';
import { MySongsService } from './service/my-songs.service';
import { Router } from '@angular/router';
import { LoadingService } from './service/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-interview-test';
  searchText = '';
  songLists: any = [];
  selectedSong: any;
  loadingService = this.loadService;

  private songListSubscription: Subscription;

  constructor(
    private mySongsService: MySongsService,
    private router: Router,
    private loadService: LoadingService
  ) {
    this.mySongsService.getList().subscribe((res) => {
      this.mySongsService.setSongList(res);
    });

    this.songListSubscription = this.mySongsService
      .getSongListObservable()
      .subscribe((updatedList) => {
        this.songLists = updatedList;
      });
  }

  ngOnDestroy() {
    this.songListSubscription.unsubscribe();
  }

  isListRoute(): boolean {
    return this.router.url.includes('/list');
  }

  searchSongs(name: string) {
    this.mySongsService.getList().subscribe((data) => {
      const songs = data.filter((song: any) => song.name.includes(name));
      setTimeout(() => {
        this.mySongsService.getSongsByName(songs);
      }, 2000);
    });
  }
}
