import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { QuoteComponent } from './quote/quote.component';
import { NewquoteComponent } from './newquote/newquote.component';
import { EditComponent } from './edit/edit.component';
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component'

const routes: Routes = [
  {
    path: "new",
    component: NewauthorComponent
  },
  {
    path: "edit/:id",
    component: EditComponent
  },
  {
    path: "quotes/:id",
    component: QuoteComponent
  },
  {
    path: "write/:id",
    component: NewquoteComponent
  },
  {
    path: "",
    pathMatch: 'full',
    component: HomeComponent
  },
  // {
  //   path: '**',
  //   component: '/PageNotFoundComponent'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
