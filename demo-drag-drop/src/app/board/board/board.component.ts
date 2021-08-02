import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {BoardService} from "../../service/board/board.service";
import {Board} from "../../model/board";
import {Card} from "../../model/card";
import {Column} from "../../model/column";
import {ColumnService} from "../../service/column/column.service";
import {CardService} from "../../service/card/card.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  boardId = -1;
  board: Board = {
    id: -1,
    owner: {},
    title: '',
    columns: []
  };
  columns: Column[] = [];
  cards: Card[][] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private boardService: BoardService,
              private columnService: ColumnService,
              private cardService: CardService) {
  }

  ngOnInit(): void {
    this.renderPage();
  }

  renderPage() {
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
    console.log(this.board);
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
  }

  public dropGrid(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
  }

  public drop(event: CdkDragDrop<Card[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


  // dropCard(event: CdkDragDrop<Card[]>, column: Card[]) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  //   console.log(event)
  //   console.log(column);
  //   this.saveArrayToLocalBoard();
  //   this.updateRemoteBoard();
  // }
  //
  // saveArrayToLocalBoard() {
  //   let columnCount = this.cards.length;
  //   this.board.columns = new Array(columnCount);
  //   for (let i = 0; i < columnCount; i++) {
  //     this.board.columns[i] = this.columns[i];
  //     let rowCount = this.cards[i].length;
  //     this.board.columns[i].cards = new Array(rowCount)
  //     for (let j = 0; j < rowCount; j++) {
  //       let card = this.cards[i][j];
  //       card.position = j;
  //       this.board.columns[i].cards[j] = card;
  //     }
  //   }
  //   console.log(this.board);
  // }
  //
  // private updateRemoteBoard() {
  //   let cardDto: Card[] = [];
  //   let columnIdDto: number[] = [];
  //   let columnDto: Column[] = [];
  //   for (let column of this.board.columns) {
  //     columnIdDto.push(column.id);
  //     columnDto.push(column);
  //     for (let card of column.cards) {
  //       cardDto.push(card);
  //     }
  //   }
  //   console.log(cardDto);
  //   console.log(columnDto);
  //   this.cardService.updateAll(cardDto).subscribe(cards => {
  //     console.log('updating cards');
  //     console.log(cards);
  //     this.columnService.deleteAllById(columnIdDto).subscribe(columns => {
  //       console.log('deleting columns');
  //       console.log(columns);
  //       this.columnService.updateAll(columnDto).subscribe(columns => {
  //         console.log('updating columns');
  //         console.log(columns);
  //       })
  //     }, error => {
  //       console.log(error);
  //       this.columnService.updateAll(columnDto).subscribe(columns => {
  //         console.log('updating columns');
  //         console.log(columns);
  //       })
  //     })
  //   })
  // }
  //
  // dropColumn(event: CdkDragDrop<Card[][], any>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // }
}
