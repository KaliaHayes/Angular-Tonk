import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }
  
  cards = [
    {
      name: 'ace-of-spades',
      value: 13,
      img: '/'
    }
  ]

}
