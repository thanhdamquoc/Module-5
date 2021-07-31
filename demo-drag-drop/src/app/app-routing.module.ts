import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardComponent} from "./board/board/board.component";
import {BoardListComponent} from "./board/board-list/board-list.component";

const routes: Routes = [{
  path: '',
  component: BoardListComponent
}, {
  path: 'boards/:id',
  component: BoardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
