import { Component, OnInit } from '@angular/core';
import { GameData, ServerDataService } from '../server-data.service';

@Component({
  selector: 'app-check-window',
  templateUrl: './check-window.component.html',
  styleUrls: ['./check-window.component.css']
})
export class CheckWindowComponent implements OnInit {
  private gameData: GameData[];

  constructor(private servarDataService: ServerDataService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.servarDataService.getData('check').subscribe(data => this.gameData = data);
  }

}
