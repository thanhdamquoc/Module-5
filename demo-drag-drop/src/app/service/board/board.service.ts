import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Board} from "../../model/board";
import {environment} from "../../../environments/environment";
import {Card} from "../../model/card";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private httpClient: HttpClient) {
  }

  getAllBoards(): Observable<Board[]> {
    return this.httpClient.get<Board[]>(`${API_URL}boards`);
  }

  getBoardById(id: number): Observable<Board> {
    return this.httpClient.get<Board>(`${API_URL}boards/${id}`);
  }

  updateBoard(id: number, board: Board): Observable<Board> {
    return this.httpClient.put<Board>(`${API_URL}boards/${id}`, board);
  }
}
