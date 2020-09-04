import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pago-efectivo',
  templateUrl: './pago-efectivo.component.html',
  styleUrls: ['./pago-efectivo.component.css']
})
export class PagoEfectivoComponent implements OnInit {

  @Input() monto;

  constructor() { }

  ngOnInit(): void {
  }

}
