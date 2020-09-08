import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit{
  public DireccionForm: FormGroup;

  @Input() localidades = [];

  @Input() ciudad;
  @Output() ciudadChange: EventEmitter<string>;

  @Input() direccion;
  @Output() direccionChange: EventEmitter<string>;

  @Input() referencia;
  @Output() referenciaChange: EventEmitter<string>;

  @Input() latitud;
  @Output() latitudChange: EventEmitter<string>;

  @Input() longitud;
  @Output() longitudChange: EventEmitter<string>;

  lat = -31.4135;
  lng = -64.18105;
  lngM;
  latM;

  enable;

  constructor() {
    this.ciudadChange = new EventEmitter();
    this.direccionChange = new EventEmitter();
    this.referenciaChange = new EventEmitter();
    this.latitudChange = new EventEmitter();
    this.longitudChange = new EventEmitter();
  }

  setCity() {
    this.enable = true;

    this.coordenadasMap(this.ciudad);
    this.ciudadChange.emit(this.ciudad);

    this.latitud = '';
    this.latitudChange.emit(this.latitud);
    this.longitud = '';
    this.longitudChange.emit(this.longitud);
  }

  setCoordenadas(coord) {
    this.disableForm();

    this.latitud = coord.lat;
    this.latitudChange.emit(this.latitud);
    this.longitud = coord.lng;
    this.longitudChange.emit(this.longitud);
  }

  coordenadasMap(localidadName) {
    const { lat, lon } = this.localidades.find(l => l.nombre === localidadName).centroide;
    this.lat = lat;
    this.lng = lon;
  }

  disableForm() {
    this.enable = false;
    this.direccion = '';
    this.direccionChange.emit(this.direccion);
  }



  ngOnInit(): void {
    this.initForm();

  }

  initForm() {
    this.DireccionForm = new FormGroup({

      callePedido: new FormControl('', [Validators.maxLength(100), Validators.required]),
      referenciaPedido: new FormControl('', [Validators.maxLength(150)]),
      numeroPedido: new FormControl('', [Validators.required, Validators.pattern('[0-9]{2,4}')])
    })
  }
}
