import {Component, OnInit} from '@angular/core';
import {BoardService} from "../../service/board/board.service";
import {Board} from "../../model/board";

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  boards: Board[] = [];

  constructor(private boardService: BoardService) {
  }

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.boardService.getAllBoards().subscribe(boards => this.boards = boards);
  }
}
