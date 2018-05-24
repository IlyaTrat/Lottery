import { Component, OnInit, Input } from '@angular/core';
import { Ticket, ServerDataService } from '../../server-data.service';
import { LoginService, UserInfo } from '../../login.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})

export class BuyComponent implements OnInit {
  user: UserInfo = {userEmail: '', userId: '', userPassword: ''};
  private balls = [];
  private ticket: Ticket;
  @Input() gameName: string;
  @Input() maxSelectedCheckbox: number;
  @Input() maxBalls: number;

  constructor(private serverDataService: ServerDataService, private loginService: LoginService) {}

  get shouldCheckBoxDisabled(): boolean {
    return this.balls.filter(item => item.value === true).length === this.maxSelectedCheckbox;
  }

  ngOnInit() {
    this.fillList(this.maxBalls);
    this.user = this.loginService.user;
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
    if (send.length === this.maxSelectedCheckbox) {
      this.sendChosen(this.gameName, this.user.userId, send.map(x => x.id));
    } else {
      console.log('Wrong number');
    }
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
