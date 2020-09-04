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
<<<<<<< HEAD
  ocultarBoton=true
  step = 0;
=======

  step = 2;

  localidades = [];
>>>>>>> 6a6b0ee2d3cc06e062b10ef79c44467a91aa4dd3

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
<<<<<<< HEAD
    (this.step<=3) && (this.step ++) && this.FuncBoton;
=======
    (this.step < 4) && (this.step ++);
  }
>>>>>>> 6a6b0ee2d3cc06e062b10ef79c44467a91aa4dd3

  }
  FuncBoton(){
    if(this.step==4){
      this.ocultarBoton=false;
    }
  }
  
  prevStep() {
    this.step > 0 ? this.step -- : this.goToHome();
  }

  goToHome() {
    let response = confirm("¿Desea volver al home?");
    response && this.router.navigate(['/']);
  }
}
