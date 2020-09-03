import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PedidoComponentComponent} from './components/pedido-component/pedido-component.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , RouterModule.forRoot([
     { path: 'Pedidos', component: PedidoComponentComponent}    ])
  ],
  providers: [],
  bootstrap: [AppComponent,PedidoComponentComponent]
})
export class AppModule { }
