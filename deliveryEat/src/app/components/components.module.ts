import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { PedidoComponentComponent } from './steps-pedido-lo-que-sea/pedido-component/pedido-component.component';
import { FormaPagoComponentComponent } from './steps-pedido-lo-que-sea/forma-pago-component/forma-pago-component.component';
import { FormaEntregaComponentComponent } from './steps-pedido-lo-que-sea/forma-entrega-component/forma-entrega-component.component';
import { FeedbackComponentComponent } from './steps-pedido-lo-que-sea/feedback-component/feedback-component.component';
import { DireccionComponent } from './steps-pedido-lo-que-sea/direccion/direccion.component';
import { CreditCardComponent } from './UI/formasDePago/credit-card/credit-card.component';
import { PagoEfectivoComponent } from './UI/formasDePago/pago-efectivo/pago-efectivo.component';
import { ResumenPedidoComponent } from './steps-pedido-lo-que-sea/resumen-pedido/resumen-pedido.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PedidoComponentComponent,
    FormaPagoComponentComponent,
    FormaEntregaComponentComponent,
    FeedbackComponentComponent,
    DireccionComponent,
    ResumenPedidoComponent,
    CreditCardComponent,
    PagoEfectivoComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    PedidoComponentComponent,
    DireccionComponent,
    FormaPagoComponentComponent,
    FormaEntregaComponentComponent,
    FeedbackComponentComponent,
    ResumenPedidoComponent
  ]
})
export class ComponentsModule { }
