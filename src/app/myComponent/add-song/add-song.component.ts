import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { categoryOptions } from '../../mockData/songs';
import { MySongsService } from '../../service/my-songs.service';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss'],
})
export class AddSongComponent {
  category = categoryOptions;
  addSongs: any = new FormGroup({
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    singerList: new FormControl([]),
  });

  constructor(
    private addSong: MySongsService,
    private alertService: AlertService
  ) {}
  getFormData() {
    if (this.addSongs.valid) {
      this.addSong.saveSong(this.addSongs?.value);
    } else {
      this.showErrorAlert('Input is not valid.');
    }
  }
  showErrorAlert(error: string): void {
    this.alertService.showError(error, 'danger');
  }
  resetForm(event: Event): void {
    event.preventDefault();
    this.addSongs.setValue({
      name: '',
      type: '',
      singerList: [],
    });
  }
}
