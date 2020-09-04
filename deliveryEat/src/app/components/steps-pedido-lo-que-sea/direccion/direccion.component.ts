import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {

  @Input() localidades = [];

  constructor() { }

  ngOnInit(): void {
  }

}
