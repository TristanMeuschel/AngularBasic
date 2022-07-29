import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cardsArray: number[] = [];
  cardNumber: number = 0;

  ngOnInit(): void {
    setInterval(()=> {
      this.cardsArray.push( this.cardsArray.length );
    }, 1000);
  }

  onStart() {

  }

  funtionInFather(event: any) {
    this.cardNumber = event;
  }

}
