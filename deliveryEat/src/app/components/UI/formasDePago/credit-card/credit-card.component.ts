import { Component } from '@angular/core';
import { Card } from '../../../../domain/interfaces/card.interface'
import isVisaCard from '../../../../helpers/cardBrand.helper'

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent {

  card: Card;

  constructor() { }

  getMeses(){
    const meses = [];
    for (let index = 1; index < 13; index++) {
      meses.push(index);
    }

    return meses;
  }

  getAnos() {
    const anos = [];
    for (let index = 0; index < 20; index++) {
      anos.push( new Date().getFullYear() + index)
    }

    return anos;
  }

}
