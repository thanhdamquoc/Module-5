import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  @Input() currentTime: number;
  @Output() startEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  startTimer() {
    setInterval(() => {
      this.currentTime += 1;
      this.startEvent.emit(this.currentTime);
    }, 1000);
  }
}
