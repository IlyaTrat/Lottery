import { Component, OnInit, Input } from '@angular/core';
import { Ticket, ServerDataService } from '../../server-data.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})

export class BuyComponent implements OnInit {
  private balls = [];
  private ticket: Ticket;
  @Input() gameName: string;
  @Input() maxSelectedCheckbox: number;
  @Input() maxBalls: number;
  constructor(private serverDataService: ServerDataService) {
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
  private checkChosenBalls () {
    const send = this.balls.filter(item => item.value === true);
    send.length !== this.maxSelectedCheckbox ? console.log('Wrong number') : this.sendChosen(this.gameName, 'vova', send.map(x => x.id));
  }

  private sendChosen(gameName: String, userId: String, numbers: Array<Number>) {
    this.ticket = {
      gameName: gameName,
      userId: userId,
      numbers: numbers
    };
    console.log(this.ticket);
    this.serverDataService.postTicket(this.ticket).subscribe(data => console.log(data));
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
