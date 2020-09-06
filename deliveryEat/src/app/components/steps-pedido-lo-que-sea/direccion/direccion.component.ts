import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent {
  public DireccionForm: FormGroup;
  
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

   ngOnInit():void {
    this.initForm();
 
   }
 
   initForm(){
     this.DireccionForm= new FormGroup({
 
      callePedido:new FormControl('',[Validators.maxLength(100),Validators.required,Validators.pattern('^(?=.*[^A-Z]*[A-Z])(?=.*[^0-9]*[0-9])[a-zA-Z0-9]$')
    ]),
       referenciaPedido:new FormControl('',[Validators.maxLength(150)]),
     })
   }
}
