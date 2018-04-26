import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})

export class BuyComponent implements OnInit {
  private balls = [];
  private maxSelectedCheckbox = 4;
  private maxBalls = 50;
  constructor() {
  }

  get shouldCheckBoxDisabled(): boolean {
    return this.balls.filter(item => item.value === true).length === this.maxSelectedCheckbox;
  }

  ngOnInit() {
    this.fillList(this.maxBalls);
  }

  private fillList(x: number) {
    for (let i = 0; i < x; i++) {
      this.balls.push({ id: i, value: false });
    }
  }

  private selectRandomBalls (x: number) {
    const rand = [];
    this.balls.map(item => item.value = false);

    while (rand.length < x) {
      let temp = this.getRandomInt(0, this.maxBalls);
      rand.includes(temp) ? temp = 0 : rand.push(temp);
    }

    return rand.forEach(item => this.balls[item].value = true);
  }

// TODO: add service
  private sendChosenBalls () {
    const send = this.balls.filter(item => item.value === true);
    send.length !== 4 ? console.log('Wrong number') : console.log(send);
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
