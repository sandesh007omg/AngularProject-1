import { Component, OnInit } from '@angular/core';
import { MySongsService } from '../../service/my-songs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../service/loading.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss'],
})
export class SongDetailsComponent implements OnInit {
  details: any = {};
  songId: string | null = null;

  constructor(
    private mysongs: MySongsService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.songId = params.get('id');
      if (this.songId) {
        this.loadSongDetails();
      }
    });
  }

  loadSongDetails() {
    this.mysongs.getList().subscribe((data) => {
      this.details = data?.find(
        (item: any) => item?.id === Number(this.songId)
      );
    });
  }

  combineSingerList(valueArray: Array<any>) {
    return valueArray.toString();
  }
  update(id: number) {
    this.loadingService.setLoading(true);
    this.router.navigate(['/update', id]);
    this.loadingService.setLoading(false);
  }
  delete(id: number) {
    this.mysongs.delete(id);
    this.loadingService.setLoading(true);
    setTimeout(() => {
      this.router.navigate(['/list']);
      this.loadingService.setLoading(false);
    }, 1000);
  }
}
