import { Injectable } from '@angular/core';
import { songsCollection } from '../mockData/songs';
import { Subject, Observable, of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { LoadingService } from './loading.service';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class MySongsService {
  private songList: any[] = [];
  // private songListSubject: Subject<any[]> = new Subject<any[]>();
  private songListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );

  constructor(
    private loadingService: LoadingService,
    private alertService: AlertService,
    private router: Router
  ) {}

  public getList(): Observable<any> {
    this.songList = songsCollection;
    return of(this.songList);
  }
  public saveSong(list: any) {
    this.loadingService.setLoading(true);
    this.songList.push({ ...list, id: this.songList?.length + 1 });
    this.loadingService.setLoading(false);
    setTimeout(() => {
      this.router.navigate(['/list']);
      this.showErrorAlert('Created successfully.', 'success');
    }, 1000);
  }

  public updateSong(updatedSong: any) {
    this.loadingService.setLoading(true);
    const indexToUpdate = this.songList.findIndex(
      (song) => song.id === updatedSong.id
    );
    if (indexToUpdate !== -1) {
      this.songList.splice(indexToUpdate, 1, updatedSong);
      this.loadingService.setLoading(false);
      setTimeout(() => {
        this.router.navigate(['/list']);
        this.showErrorAlert('Updated successfully.', 'success');
      }, 1000);
    } else {
      this.loadingService.setLoading(false);
      this.showErrorAlert('Song with ID not found:', 'danger');
    }
  }

  delete(id: number) {
    this.loadingService.setLoading(true);
    const indexToDelete = this.songList.findIndex((item) => item.id === id);
    this.loadingService.setLoading(false);
    if (indexToDelete !== -1) {
      this.songList.splice(indexToDelete, 1);
      this.showErrorAlert('Deleted successfully.', 'success');
    } else {
      this.showErrorAlert('Song with ID not found:', 'danger');
    }
  }
  showErrorAlert(error: string, type: string): void {
    this.alertService.showError(error, type);
  }

  public setSongList(list: any[]): void {
    this.songList = list;
    this.songListSubject.next(list);
  }

  public getSongListObservable(): Observable<any[]> {
    return this.songListSubject.asObservable();
  }

  public getSongsByName(songs: any[]) {
    this.setSongList(songs);
  }
}
