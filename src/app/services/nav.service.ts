import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
  private currentNumber: number;

  constructor() {}

  getNav(): number {
    return this.currentNumber;
  }

  updateNav(newNum: number): void {
    this.currentNumber = newNum;
  }

}
