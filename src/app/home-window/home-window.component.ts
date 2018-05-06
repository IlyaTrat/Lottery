import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-window',
  templateUrl: './home-window.component.html',
  styleUrls: ['./home-window.component.css']
})
export class HomeWindowComponent implements OnInit {
  private data = [
    {gameName: 'lottery 1', jackpot: 1234, nextGame: [10, 10, 2018], lastWin: [1, 2, 3, 4]},
    {gameName: 'lottery 2', jackpot: 123, nextGame: [11, 11, 2018], lastWin: [1, 2, 3, 4]},
    {gameName: 'lottery 3', jackpot: 12, nextGame: [12, 12, 2018], lastWin: [1, 2, 3, 4]},
  ];

  constructor() { }

  ngOnInit() {
  }

}
