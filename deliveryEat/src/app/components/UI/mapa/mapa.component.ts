import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit(): void {
  }

  public onMapReady(map) {
    map.addListener('click', (e) => {
      this.updateMarket(e.latLng.lat(), e.latLng.lng());
    });
  }

  updateMarket(lat: number, lng: number) {
    console.log(lat, lng);
  }
}
