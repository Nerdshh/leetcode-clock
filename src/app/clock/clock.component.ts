import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {

  interval: any;
  counter: number = 0;
  thirtyMin: number = 180000;
  minutes: string[] = ['30', '29', '28', '27', '26', '25', '24', '23', '22', '21', '20', '19', '18', '17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];
  seconds: string[] = ['00', '59', '58', '57', '56', '55', '54', '53', '52', '51', '50', '49', '48', '47', '46', '45', '44', '43', '42', '41', '40', '39', '38', '37', '36', '35','34', '33', '32', '31','30', '29', '28', '27', '26', '25', '24', '23', '22', '21', '20', '19', '18', '17', '16', '15', '14', '13', '12', '11', '10', '09', '08', '07', '06', '05', '04', '03', '02', '01'];
  minute:  string = this.minutes[0];
  second:  string = this.seconds[0];

  countdown() {
    this.interval = setInterval(() => {
      if (this.counter < this.thirtyMin) {
        this.second = this.seconds[this.counter % 60];
        if (this.counter % 60 == 0) {
          this.minute = this.minutes[1];
        }
        this.counter++;
      }
    }, 1000)
  }

  resetTime() {
    this.minute = this.minutes[0];
    this.second = this.seconds[0];
    this.counter = 0;
    clearInterval(this.interval);
  }
}





