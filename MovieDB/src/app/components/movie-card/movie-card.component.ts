import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  public imgUrl = 'pKawqrtCBMmxarft7o1LbEynys7.jpg';
  
  constructor() { }

  ngOnInit() {
  }

}
