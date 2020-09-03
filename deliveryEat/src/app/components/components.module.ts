import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoComponentComponent } from './steps-pedido-lo-que-sea/pedido-component/pedido-component.component';
import { FormaPagoComponentComponent } from './steps-pedido-lo-que-sea/forma-pago-component/forma-pago-component.component';
import { FormaEntregaComponentComponent } from './steps-pedido-lo-que-sea/forma-entrega-component/forma-entrega-component.component';
import { FeedbackComponentComponent } from './steps-pedido-lo-que-sea/feedback-component/feedback-component.component';
import { DireccionComponent } from './steps-pedido-lo-que-sea/direccion/direccion.component';



@NgModule({
  declarations: [
    PedidoComponentComponent,
    FormaPagoComponentComponent,
    FormaEntregaComponentComponent,
    FeedbackComponentComponent,
    DireccionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PedidoComponentComponent,
    DireccionComponent,
    FormaPagoComponentComponent,
    FormaEntregaComponentComponent,
    FeedbackComponentComponent
  ]
})
export class ComponentsModule { }
