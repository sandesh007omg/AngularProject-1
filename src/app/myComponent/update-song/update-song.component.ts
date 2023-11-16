import { Component } from '@angular/core';
import { MySongsService } from '../../service/my-songs.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { singerList } from 'src/app/mockData/songs';

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
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(private update: MySongsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.songId = params.get('id');
      if (this.songId) {
        this.loadSongDetails();
      }
    });
    this.dropdownList = singerList;
    this.selectedItems = [...this.details?.singerList];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
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
        singerList: this.details?.singerList,
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
      singerList: this.originalFormData?.singerList,
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
