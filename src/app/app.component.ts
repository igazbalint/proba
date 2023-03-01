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
    }
    return this.numbers;
  }
  

  countPrimes(numbersArray: any[]) {
    const startTime = new Date();
    var result = {}
    for (let i = 0; i < numbersArray.length; i++) {
      const primes = [];
      let count = 0;
      let found = false;

      for (let j = 2; j < numbersArray[i] / 2; i++) {
        if (numbersArray[i] % 2 == 0) {
          primes.push(numbersArray[i]);
          found = true;
          count++;
        }
      }
      result = {
        primes:primes,
        count:count,
        fount:found
        }
      console.log(`prim szamok: ${primes}; ${count};${found}`);
    }
    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    //result.duration = 
    console.log(`Method runtime: ${duration} milliseconds`);
    //return result
  }
}
