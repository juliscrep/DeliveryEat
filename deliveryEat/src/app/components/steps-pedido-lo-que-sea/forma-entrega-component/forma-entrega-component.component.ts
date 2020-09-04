import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forma-entrega-component',
  templateUrl: './forma-entrega-component.component.html',
  styleUrls: ['./forma-entrega-component.component.css']
})
export class FormaEntregaComponentComponent implements OnInit {

  formasDeEntrega = [
    "Lo antes posible",
    "Fecha/hora"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}