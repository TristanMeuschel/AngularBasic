import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardNumber: number = 0;
  @Output() cardNumberEmmit = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {

  }

  myFunction() {
    this.cardNumberEmmit.emit(this.cardNumber);
  }

}
