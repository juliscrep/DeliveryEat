import { Component, OnInit } from '@angular/core';
import { FormasDePagoEnum } from '../../../domain/enums/formasDePago.enum'

@Component({
  selector: 'app-forma-pago-component',
  templateUrl: './forma-pago-component.component.html',
  styleUrls: ['./forma-pago-component.component.css']
})
export class FormaPagoComponentComponent {

  formasDePago = [
    {
      nombre: 'Efectivo',
      value: FormasDePagoEnum.Efectivo
    },
    {
      nombre: 'Tarjeta de Credito',
      value: FormasDePagoEnum.TarjetaCredito
    }
  ]

  formaDePagoSeleccionada = FormasDePagoEnum.Efectivo;

  constructor() { }

}
