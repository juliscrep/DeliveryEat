import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-component',
  templateUrl: './pedido-component.component.html',
  styleUrls: ['./pedido-component.component.css']
})
export class PedidoComponentComponent {

  constructor() { }

  selectImage( image ) {
    console.log(image);
  }

}
