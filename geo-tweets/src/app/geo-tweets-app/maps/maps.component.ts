import { Component, OnInit } from '@angular/core';
import {AgmMarker, MarkerManager} from '@agm/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  latitude;
  longitude;
  selectedMarker;
  mapType = 'roadmap';
  markers = [];
  constructor() { }

  ngOnInit() {
  }

  addMarker(latitude: number, longitude: number) {
    this.markers.push({ latitude, longitude, alpha: 0.4 });
  }

  max(coordType: 'latitude' | 'longitude'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'latitude' | 'longitude'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  selectMarker(event) {
    this.selectedMarker = {
      latitude: event.latitude,
      longitude: event.longitude
    };
  }
}
