import { Component, OnInit } from '@angular/core';
import { GameData, ServerDataService } from '../server-data.service';

@Component({
  selector: 'app-buy-window',
  templateUrl: './buy-window.component.html',
  styleUrls: ['./buy-window.component.css']
})
export class BuyWindowComponent implements OnInit {
  private gameData: GameData[];

  constructor(private servarDataService: ServerDataService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.servarDataService.getData('buy').subscribe(data => this.gameData = data);
  }
}
