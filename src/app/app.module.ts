import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SongsComponent } from './components/songs/songs.component';
import { AddSongComponent } from './myComponent/add-song/add-song.component';
import { UpdateSongComponent } from './myComponent/update-song/update-song.component';
import { ListSongComponent } from './myComponent/list-song/list-song.component';
import { SongDetailsComponent } from './myComponent/song-details/song-details.component';
import { NotFoundComponent } from './myComponent/not-found/not-found.component';
import { AlertComponent } from './myComponent/alert/alert.component';
import { ConfirmationModalComponent } from './myComponent/confirmation-modal/confirmation-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongsComponent,
    AddSongComponent,
    UpdateSongComponent,
    ListSongComponent,
    SongDetailsComponent,
    NotFoundComponent,
    AlertComponent,
    ConfirmationModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
