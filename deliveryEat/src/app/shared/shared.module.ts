import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Components
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    TopBarComponent, 
    FooterComponent, 
    SpinnerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    TopBarComponent, 
    FooterComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
