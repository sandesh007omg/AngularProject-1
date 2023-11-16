import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { MySongsService } from '../../service/my-songs.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../../myComponent/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.scss'],
})
export class ListSongComponent {
  constructor(
    private mysongs: MySongsService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  dataList: any = [];
  private songListSubscription: Subscription | any;

  ngOnInit(): void {
    this.songListSubscription = this.mysongs
      .getSongListObservable()
      .subscribe((data) => {
        this.dataList = data;
      });
  }

  ngOnDestroy() {
    this.songListSubscription.unsubscribe();
  }
  delete(id: number) {
    this.mysongs.delete(id);
  }

  // openDeleteConfirmationModal(id: number): void {
  //   const dialogRef = this.dialog.open(ConfirmationModalComponent, {
  //     width: '250px',
  //     data: {
  //       title: 'Confirmation',
  //       message: 'Are you sure you want to delete?',
  //     },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.delete(id);
  //     }
  //   });
  // }

  combineSingerList(valueArray: Array<any>) {
    return valueArray.toString();
  }

  viewDetail(song: any) {
    this.router.navigate(['/details', song?.id]);
  }
  update(song: any) {
    this.router.navigate(['/update', song?.id]);
  }
}
