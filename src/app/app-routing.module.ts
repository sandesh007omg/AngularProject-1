import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSongComponent } from './myComponent/add-song/add-song.component';
import { UpdateSongComponent } from './myComponent/update-song/update-song.component';
import { ListSongComponent } from './myComponent/list-song/list-song.component';
import { SongDetailsComponent } from './myComponent/song-details/song-details.component';
import { NotFoundComponent } from './myComponent/not-found/not-found.component';

const routes: Routes = [
  {
    component: AddSongComponent,
    path: 'create',
  },
  {
    component: UpdateSongComponent,
    path: 'update/:id',
  },
  {
    component: ListSongComponent,
    path: 'list',
  },
  {
    component: SongDetailsComponent,
    path: 'details/:id',
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
