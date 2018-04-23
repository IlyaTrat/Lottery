import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})

export class BuyComponent implements OnInit {
  private balls = [];
  private maxSelectedCheckbox = 4;
  constructor() {
  }

  get shouldCheckBoxDisabled(): boolean {
    return this.balls.filter(item => item.value === true).length === this.maxSelectedCheckbox;
  }

  ngOnInit() {
    this.fillList(50);
  }

  private fillList(x: number) {
    for (let i = 0; i < x; i++) {
      this.balls.push({ id: i, value: false });
    }
  }
}
