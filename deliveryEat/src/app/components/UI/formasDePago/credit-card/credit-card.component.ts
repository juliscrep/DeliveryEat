import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../../../domain/interfaces/card.interface'
import { isVisaCard, getCardType } from '../../../../helpers/cardBrand.helper'

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent {

  @Output() validateEvent: EventEmitter<boolean>;
  @Input() card: Card;
  ano = '';
  mes = '';

  constructor() {
    this.validateEvent = new EventEmitter();

    this.card = {
      nombre: '',
      numero: '',
      cvv: '',
      vencimiento: '',
      brand: ''
    }
  }

  setCardBrand() {
    this.card.brand = getCardType(this.card.numero);
  }

  getMeses() {
    const meses = [];
    for (let index = 1; index < 13; index++) {
      meses.push(index);
    }

    return meses;
  }

  getAnos() {
    const anos = [];
    for (let index = 0; index < 20; index++) {
      anos.push(new Date().getFullYear() + index)
    }

    return anos;
  }

  setDate() {
    this.card.vencimiento = !this.mes || !this.ano ? null : this.mes + '/' + this.ano;
  }

  validate() {
    let validate = true;
    ( !this.card.nombre ) && (validate = false);
    ( !this.card.vencimiento ) && (validate = false);
    ( !this.card.cvv ) && (validate = false);

    ( !this.card.numero ) && (validate = false);
    ( !isVisaCard(this.card.numero) ) && (validate = false);
    ( this.card.numero.length !== 16 ) && (validate = false);
   
    this.validateEvent.emit( validate );
  }

}
