import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pedido-component',
  templateUrl: './pedido-component.component.html',
  styleUrls: ['./pedido-component.component.css']
})
export class PedidoComponentComponent {

  @Input() precio: number;
  @Output() precioChange : EventEmitter< number >;
  @Input() descripcion: string;
  @Output() descripcionChange : EventEmitter< string >;

  @Input() imagen: File
  @Output() imagenChange : EventEmitter< File >;

  constructor() { 
    this.precioChange = new EventEmitter();
    this.descripcionChange = new EventEmitter();
    this.imagenChange = new EventEmitter();
  }

  selectImage( image ) {
    console.log(this.imagen);
    this.imagenChange.emit(image);
  }

  test(){
    console.log(this.descripcion);
    
  }

}
