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
  @Input() direccionRetiroDelProducto: string;
  @Output() direccionRetiroDelProductoChange : EventEmitter< string >;

  @Input() imagen: File
  @Output() imagenChange : EventEmitter< File >;

  @Output() validateEvent: EventEmitter<boolean>;

  errors = {
    precio: '',
    descripcion: '',
    direccion: ''
  }


  constructor() { 
    this.precioChange = new EventEmitter();
    this.descripcionChange = new EventEmitter();
    this.direccionRetiroDelProductoChange = new EventEmitter();
    this.imagenChange = new EventEmitter();
    this.validateEvent = new EventEmitter();
  }

  selectImage( image ) {
    this.imagen = image;
    this.imagenChange.emit(this.imagen);
  }
}
