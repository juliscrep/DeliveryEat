import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-pago-efectivo',
  templateUrl: './pago-efectivo.component.html',
  styleUrls: ['./pago-efectivo.component.css']
})
export class PagoEfectivoComponent implements OnInit {
  public EfectivoForm: FormGroup;
  @Input() monto;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }
  
  initForm(){
    this.EfectivoForm= new FormGroup({

      precioPedido:new FormControl('',[Validators.pattern('^[0-9]{5}')
      ,Validators.required]),
      
    })
  }
  esNoValido(){
    return this.EfectivoForm.controls.precioPedido.value < 10;
  }

}
