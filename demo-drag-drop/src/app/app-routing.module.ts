import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardComponent} from "./board/board/board.component";
import {BoardListComponent} from "./board/board-list/board-list.component";
import {DemoTrelloComponent} from "./board/demo-trello/demo-trello.component";

const routes: Routes = [{
  path: '',
  component: BoardListComponent
}, {
  path: 'boards/:id',
  component: BoardComponent
}, {
  path: 'demo',
  component: DemoTrelloComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
