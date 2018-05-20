import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface GameData {
  gameName: String;
  jackpot: Number;
  nextGame: Date;
  lastWin: Array<Number>;
  gamesCount: Number;
  maxBalls: Number;
  maxSelectedCheckbox: Number;
}

export interface Ticket {
  gameName: String;
  userId: String;
  numbers: Array<Number>;
}

@Injectable()
export class ServerDataService {

  constructor(private http: HttpClient) { }

  getData(path: String): Observable<GameData[]> {
    return this.http.get<GameData[]>('http://localhost:3000/api/gameData/' + path);
  }

  postTicket(ticket: Ticket): Observable<any> {
    return this.http.put<Ticket>('http://localhost:3000/api/gameData/newTicket', ticket);
  }

}
