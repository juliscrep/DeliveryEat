import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import sortCitiesByName from '../../helpers/sortCities.helper';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  step = 2;

  localidades = [];

  constructor(
    private router: Router,
    private addressService: AddressService,
  ) {
    console.log('Inicia la busqueda');
    
    this.addressService.getLocalidadesByProvincia('cordoba')
      .subscribe( loc => {
        this.localidades = sortCitiesByName(loc.localidades);
      });
   }

  nextStep() {
    (this.step < 4) && (this.step ++);
  }

  prevStep() {
    this.step > 0 ? this.step -- : this.goToHome();
  }

  goToHome() {
    let response = confirm("¿Desea volver al home?");
    response && this.router.navigate(['/']);
  }
}
