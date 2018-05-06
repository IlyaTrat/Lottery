import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-window',
  templateUrl: './check-window.component.html',
  styleUrls: ['./check-window.component.css']
})
export class CheckWindowComponent implements OnInit {
  private data = [
    {gameName: 'lottery 1', numberOfGames: 20},
    {gameName: 'lottery 2', numberOfGames: 20},
    {gameName: 'lottery 3', numberOfGames: 20},
  ];

  constructor() { }

  ngOnInit() {
  }

}
