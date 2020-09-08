import { Component,Input, OnInit } from '@angular/core';
import { Pedido } from 'src/app/domain/interfaces/pedido.interface';

@Component({
  selector: 'app-resumen-pedido',
  templateUrl: './resumen-pedido.component.html',
  styleUrls: ['./resumen-pedido.component.css']
})
export class ResumenPedidoComponent implements OnInit {
  
  @Input() pedido: Pedido;
  
  constructor() { }

  ngOnInit(): void {
  }

}
