import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../../domain/interfaces/pedido.interface';
import sortCitiesByName from '../../helpers/sortCities.helper';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  step = 0;
  pedido: Pedido;

  localidades = [];

  constructor(
    private router: Router,
    private addressService: AddressService,
  ) {
    this.pedido = {
      descripcion: 'asdasd',
      imagen: null,
      pago: {
        montoPagar: 0,
        formaDePago: '',
        tarjeta: null
      },
      direccionEntrega: {
        ciudad: '',
        direccion: '',
        referencia: '',
        latitud: '',
        longitud: ''
      },
      entrega: {
        fechaHora: '',
        formaDeEntrega: '',
      }
    };
  }

  ngOnInit(): void {
    this.addressService.getLocalidadesByProvincia('cordoba')
      .subscribe(loc => {
        this.localidades = sortCitiesByName(loc.localidades);
      });
  }

  nextStep() {
    (this.step < 4) && (this.step++);
    console.log(this.pedido);    
  }

  prevStep() {
    this.step > 0 ? this.step-- : this.goToHome();
  }

  goToHome() {
    let response = confirm("¿Desea volver al home?");
    response && this.router.navigate(['/']);
  }

  setImage( image ) {

  }

}
