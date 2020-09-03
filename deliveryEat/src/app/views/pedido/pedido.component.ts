import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  step = 0;

  constructor(
    private router: Router,
    private addressService: AddressService
  ) {
    console.log('Inicia la busqueda');
    
    this.addressService.getLocalidadesByProvincia('cordoba')
      .subscribe( loc => console.log(loc) );
   }

  nextStep() {
    (this.step < 3) && (this.step ++);
  }

  prevStep() {
    this.step > 0 ? this.step -- : this.goToHome();
  }

  goToHome() {
    let response = confirm("¿Desea volver al home?");
    response && this.router.navigate(['/']);
  }
}
