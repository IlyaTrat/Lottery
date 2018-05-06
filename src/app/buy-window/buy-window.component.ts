import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-window',
  templateUrl: './buy-window.component.html',
  styleUrls: ['./buy-window.component.css']
})
export class BuyWindowComponent implements OnInit {
  private data = [
    {gameName: 'lottery 1', maxBalls: 50, maxSelectedCheckbox: 5},
    {gameName: 'lottery 2', maxBalls: 40, maxSelectedCheckbox: 3},
    {gameName: 'lottery 3', maxBalls: 45, maxSelectedCheckbox: 4}
  ];

  constructor() { }

  ngOnInit() {
  }

}
