import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../../domain/interfaces/pedido.interface';
import sortCitiesByName from '../../helpers/sortCities.helper';
import { AddressService } from '../../services/address.service';
import {ComponentsModule} from '../../components/components.module';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  step = 1;
  pedido: Pedido;
  validaciones;

  isLoading: boolean;

  localidades = [];

  constructor(
    private router: Router,
    private addressService: AddressService,
    private modulos: ComponentsModule,
  ) {
    this.validaciones = new Array();

    this.pedido = {
      descripcion: '',
      imagen: null,
      pago: {
        montoPagar: null,
        formaDePago: '',
        tarjeta: null
      },
      direccionEntrega: {
        ciudad: '',
        calle: '',
        numero: '',
        referencia: '',
        latitud: '',
        longitud: ''
      },
      entrega: {
        fechaHora: '',
        formaDeEntrega: '',
      },
      direccionRetiroDelProducto: ''
    };
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.addressService.getLocalidadesByProvincia('cordoba')
      .subscribe(loc => {
        this.localidades = sortCitiesByName(loc.localidades);
        this.isLoading = false;
      });
  }

  nextStep() {
    (this.step < 4 && this.validaciones[this.step])&& (this.step++);
    console.log(this.pedido); 
    this.modulos   
  }

  prevStep() {
    this.step > 0 ? this.step-- : this.goToHome();
  }

  goToHome() {
    let response = confirm("¿Desea volver al home?");
    response && this.router.navigate(['/']);
  }

  setValidacion( step, result ) {
    this.validaciones[step] = result;
    console.log(this.validaciones);
    
  }

}
