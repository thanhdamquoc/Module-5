import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Board} from "../../model/board";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Column} from "../../model/column";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  constructor(private httpClient: HttpClient) {
  }

  update(id: number, column: Column): Observable<Column> {
    return this.httpClient.put<Column>(`${API_URL}columns/${id}`, column);
  }

  updateAll(columns: Column[]): Observable<Column[]> {
    return this.httpClient.put<Column[]>(`${API_URL}columns`, columns);
  }

  deleteAllById(ids: number[]): Observable<Column[]> {
    return this.httpClient.post<Column[]>(`${API_URL}columns/delete`, ids);
  }
}
