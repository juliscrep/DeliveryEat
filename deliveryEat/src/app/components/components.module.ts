import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoComponentComponent } from './pedido-component/pedido-component.component';
import { FormaPagoComponentComponent } from './forma-pago-component/forma-pago-component.component';
import { FormaEntregaComponentComponent } from './forma-entrega-component/forma-entrega-component.component';
import { FeedbackComponentComponent } from './feedback-component/feedback-component.component';
import { DireccionComponent } from './direccion/direccion.component';



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
