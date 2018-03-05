import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { ListComponent } from './players/list/list.component';
import { AddplayerComponent } from './players/addplayer/addplayer.component';

import { StatusComponent } from './status/status.component';
import { GameComponent } from './status/game/game.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "players"
  },
  {
    path: "players",
    component: PlayersComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "list"
      },
      {
        path: "list",
        component: ListComponent
      },
      {
        path: "addplayer",
        component: AddplayerComponent
      }
    ]
  },
  {
    path: "status",
    component: StatusComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "game/1",
      },
      {
        path: "game/:id",
        component: GameComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
