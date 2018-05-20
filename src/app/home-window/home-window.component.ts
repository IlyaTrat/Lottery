import { Component, OnInit } from '@angular/core';
import { ServerDataService, GameData } from '../server-data.service';

@Component({
  selector: 'app-home-window',
  templateUrl: './home-window.component.html',
  styleUrls: ['./home-window.component.css']
})
export class HomeWindowComponent implements OnInit {
  private gameData: GameData[];

  constructor(private servarDataService: ServerDataService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.servarDataService.getData('home').subscribe(data => this.gameData = data);
  }

}
