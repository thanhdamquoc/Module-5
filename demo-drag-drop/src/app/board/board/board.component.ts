import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {BoardService} from "../../service/board/board.service";
import {Board} from "../../model/board";
import {Card} from "../../model/card";
import {Column} from "../../model/column";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: Board = {
    id: -1,
    owner: {},
    title: '',
    columns: []
  };

  columns: Column[] = [];
  cards: Card[][] = [];

  boardId = -1;

  constructor(private activatedRoute: ActivatedRoute,
              private boardService: BoardService) {
  }

  ngOnInit(): void {
    this.getBoardIdByUrl();
  }

  getBoardIdByUrl() {
    this.activatedRoute.params.pipe(map(p => p.id)).subscribe(id => {
      this.boardId = id;
      this.getBoard();
    });
  }

  getBoard() {
    this.boardService.getBoardById(this.boardId).subscribe(board => {
      this.board = board;
      this.loadBoardToArray();
    });
  }

  loadBoardToArray() {
    let columnCount = this.board.columns.length;
    this.cards = new Array(columnCount);
    for (let i = 0; i < columnCount; i++) {
      let column = this.board.columns[i];
      let columnPosition = column.position;
      let rowCount = column.cards.length;
      this.columns[columnPosition] = column;
      this.cards[columnPosition] = new Array(rowCount);
      for (let j = 0; j < rowCount; j++) {
        let card = column.cards[j];
        let rowPosition = card.position;
        this.cards[columnPosition][rowPosition] = card;
      }
    }
    console.log(this.cards);
  }

  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.saveArrayToBoard();
  }

  saveArrayToBoard() {
    let columnCount = this.cards.length;
    this.board.columns = new Array(columnCount);
    for (let i = 0; i < columnCount; i++) {
      this.board.columns[i] = this.columns[i];
      let rowCount = this.cards[i].length;
      this.board.columns[i].cards = new Array(rowCount)
      for (let j = 0; j < rowCount; j++) {
        let card = this.cards[i][j];
        card.position = j;
        this.board.columns[i].cards[j] = card;
      }
    }
    console.log(this.board);
  }
}
