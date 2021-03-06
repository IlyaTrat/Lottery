import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  @Input() gameName: string;
  @Input() gamesCount: number;
  private games: Array<number>;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    this.games = Array(this.gamesCount).fill(0).map((item, ind) => ind);
  }

}
