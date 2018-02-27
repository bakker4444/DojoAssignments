import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteComponent } from './note/note.component';
import { WallComponent } from './wall/wall.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
