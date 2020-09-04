import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  step = 0;

  constructor(
    private router: Router
  ) { }

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
