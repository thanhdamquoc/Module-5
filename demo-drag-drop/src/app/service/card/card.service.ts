import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Card} from "../../model/card";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) {
  }

  update(id: number, card: Card): Observable<Card> {
    return this.httpClient.put<Card>(`${API_URL}cards/${id}`, card);
  }

  updateAll(cards: Card[]): Observable<Card[]> {
    return this.httpClient.put<Card[]>(`${API_URL}cards`, cards);
  }
}
