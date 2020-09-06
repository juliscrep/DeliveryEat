import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pedido-component',
  templateUrl: './pedido-component.component.html',
  styleUrls: ['./pedido-component.component.css']
})
export class PedidoComponentComponent {
  pedidoForm: FormGroup;

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
   
  ngOnInit():void {
   this.initForm();

  }

  initForm(){
    this.pedidoForm= new FormGroup({

      descripcionPedido:new FormControl('',[Validators.maxLength(500),Validators.required]),
      precioPedido:new FormControl('',[Validators.pattern('^[0-9]{5}')
      ,Validators.required])
    })
  }

  selectImage( image ) {
    console.log(this.imagen);
    this.imagenChange.emit(image);
  }

  test(){
    console.log(this.descripcion);
    
  }

}
