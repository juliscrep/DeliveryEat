import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PedidoComponentComponent} from './components/pedido-component/pedido-component.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import {TopBarComponent} from './shared/top-bar/top-bar.component';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 6a6b0ee2d3cc06e062b10ef79c44467a91aa4dd3

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule , RouterModule.forRoot([
     { path: "Pedidos", component: PedidoComponentComponent}    ])
=======
    AppRoutingModule,
    HttpClientModule,
>>>>>>> 6a6b0ee2d3cc06e062b10ef79c44467a91aa4dd3
  ],
  providers: [],
  bootstrap: [AppComponent,PedidoComponentComponent,TopBarComponent]
})
export class AppModule { }
