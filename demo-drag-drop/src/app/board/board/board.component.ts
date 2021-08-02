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
  previousColumn: Column = {
    cards: [],
    id: -1,
    position: -1,
    title: ""
  };

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
      console.log(this.board);
    });
  }

  public dropColumn(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
    this.saveChanges();
  }

  public dropCard(event: CdkDragDrop<Card[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    //assign value to previous column
    let previousColumnId = parseInt(event.previousContainer.id);
    for (let column of this.board.columns) {
      if (column.id == previousColumnId) {
        this.previousColumn = column;
        break;
      }
    }
    this.saveChanges()
  }

  private saveChanges() {
    this.updatePositions();
    this.updateRemoteBoard();
  }

  private updatePositions() {
    let columns = this.board.columns;
    for (let i = 0; i < columns.length; i++) {
      let column = columns[i];
      column.position = i;
      let cards = column.cards;
      for (let j = 0; j < cards.length; j++) {
        cards[j].position = j;
      }
    }
  }

  private updateRemoteBoard() {
    let cardsDto: Card[] = [];
    let columnsDto: Column[] = [];
    for (let column of this.board.columns) {
      columnsDto.push(column);
      for (let card of column.cards) {
        cardsDto.push(card);
      }
    }
    this.cardService.updateAll(cardsDto).subscribe(() => {
      if (this.previousColumn.id != -1) {
        this.columnService.update(this.previousColumn.id, this.previousColumn).subscribe(() => {
            this.columnService.updateAll(columnsDto).subscribe(() => {
                this.boardService.updateBoard(this.boardId, this.board).subscribe(() => {
                  this.renderPage();
                })
              }
            )
          }
        )
      } else {
        this.columnService.updateAll(columnsDto).subscribe(() => {
            this.boardService.updateBoard(this.boardId, this.board).subscribe(() => {
              this.renderPage();
            })
          }
        )
      }
    });

  }
}
