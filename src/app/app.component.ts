import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cardsArray: number[] = [];
  cardNumber: number = 0;
  counter: any;
  state: boolean = false;

  ngOnInit(): void {
    setInterval(()=> {
      if (this.state) {
        this.cardsArray.push( this.cardsArray.length );
      }
    }, 1000);
  }

  onStop() {
    this.state = false;
  }

  onStart() {
    this.state = true;
  }

  funtionInFather(event: any) {
    this.cardNumber = event;
  }

}
