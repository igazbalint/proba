import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'feladat';
  numbers: any = [];

  btnpressed: boolean = false;

  generateNumbers(quantity: number = 10) {
    for (let i = 0; i < quantity; i++) {
      this.numbers.push(Math.floor(Math.random() * (5000 - 3 + 1) + 3));
      console.log(this.numbers);
      this.btnpressed = true;
      return this.numbers;
    }
  }

}
