import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  paths: String[] = [
    'home',
    'check',
    'buy',
    'rules',
    'about'
  ];

  constructor() { }

  ngOnInit() {
  }

}
