import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() gameName: string;
  @Input() jackpot: Number;
  @Input() nextGame: Array<Number>;
  @Input() lastWin: Array<Number>;

  constructor() { }

  ngOnInit() {
  }

}
