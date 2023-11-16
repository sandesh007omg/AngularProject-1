import { Component } from '@angular/core';
import { MySongsService } from '../../service/my-songs.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.component.html',
  styleUrls: ['./update-song.component.scss'],
})
export class UpdateSongComponent {
  details: any = {};
  songId: string | null = null;
  originalFormData: any;
  updateSongs: any = new FormGroup({
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    singerList: new FormControl([]),
  });

  constructor(private update: MySongsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.songId = params.get('id');
      if (this.songId) {
        this.loadSongDetails();
      }
    });
  }

  loadSongDetails() {
    this.update.getList().subscribe((data) => {
      this.details = data?.find(
        (item: any) => item?.id === Number(this.songId)
      );
      this.originalFormData = { ...this.details };
      this.updateSongs.setValue({
        name: this.details?.name,
        type: this.details?.type,
        singerList: [],
      });
    });
  }

  getFormData() {
    const data = this.updateSongs?.value;
    if (this.updateSongs.valid) {
      this.update.updateSong({ ...data, id: Number(this.songId) });
    } else {
      console.log('Form is not valid');
    }
  }

  resetForm(event: Event): void {
    event.preventDefault();
    this.updateSongs.setValue({
      name: this.originalFormData?.name,
      type: this.originalFormData?.type,
      singerList: [],
    });
  }
}
