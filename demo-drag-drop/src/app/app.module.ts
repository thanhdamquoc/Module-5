import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { BoardComponent } from './board/board/board.component';
import { BoardListComponent } from './board/board-list/board-list.component';
import {HttpClientModule} from "@angular/common/http";
import { DemoTrelloComponent } from './board/demo-trello/demo-trello.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardListComponent,
    DemoTrelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
