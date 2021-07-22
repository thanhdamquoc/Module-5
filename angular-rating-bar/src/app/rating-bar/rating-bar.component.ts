import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RatingUnit} from '../ratingUnit';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  @Input() maxRating: number;
  @Output() ratingEvent = new EventEmitter<number>();
  isActive = false;
  currentRating = -1;
  ratings: RatingUnit[] = [];

  constructor() {
  }

  ngOnInit() {
    this.load();
  }

  load() {
    for (let i = 0; i < this.maxRating; i++) {
      this.ratings.push({
        value: i + 1,
        color: 'gray'
      });
    }
  }

  giveRating(value: number) {
    this.ratingEvent.emit(value);
    this.isActive = true;
    this.currentRating = value;
    for (let i = 0; i < this.ratings.length; i++) {
      let rating = this.ratings[i];
      if (rating.value <= this.currentRating) {
        rating.color = 'red';
      } else {
        rating.color = 'gray';
      }
    }
  }
}
