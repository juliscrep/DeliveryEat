import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pedido-component',
  templateUrl: './pedido-component.component.html',
  styleUrls: ['./pedido-component.component.css']
})
export class PedidoComponentComponent {
  public PedidoForm: FormGroup;

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
   
  ngOnInit():void {
   this.initForm();

  }

  initForm(){
    this.PedidoForm= new FormGroup({

      descripcionPedido:new FormControl('',[Validators.maxLength(500),Validators.required]),
      precioPedido:new FormControl('',[Validators.pattern('^[0-9]{5}')
      ,Validators.required]),
    })
  }

  esNoValido(){
    return this.PedidoForm.controls.precioPedido.value < 10;
  }

  selectImage( image ) {
    this.imagen = image;
    this.imagenChange.emit(this.imagen);
  }
}
