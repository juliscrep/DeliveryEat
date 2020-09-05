import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent {

  @Input() localidades = [];

  @Input() ciudad;
  @Output() ciudadChange: EventEmitter< string >;

  @Input() direccion;
  @Output() direccionChange: EventEmitter< string >;

  @Input() referencia;
  @Output() referenciaChange: EventEmitter< string >;

  @Input() latitud;
  @Output() latitudChange: EventEmitter< string >;

  @Input() longitud;
  @Output() longitudChange: EventEmitter< string >;

  constructor() {
    this.ciudadChange = new EventEmitter();
    this.direccionChange = new EventEmitter();
    this.referenciaChange = new EventEmitter();
    this.latitudChange = new EventEmitter();
    this.longitudChange = new EventEmitter();
   }
}
