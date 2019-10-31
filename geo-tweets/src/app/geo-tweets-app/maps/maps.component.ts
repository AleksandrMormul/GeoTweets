import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import {AgmCircle, MouseEvent} from '@agm/core';
import {AgmMarker, CircleManager, MarkerManager} from '@agm/core';
import {google} from '@agm/core/services/google-maps-types';
import {Router} from '@angular/router';
import {GeoTweetService} from '../geo-tweet.service';
import {Twitter} from '../twitter/twitter';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {

  settingsTw: Twitter[] = [];
  // tweetText = new FormControl('');
  // google maps zoom level
  zoom = 8;

  // initial center position for the map
  lat = 51.673858;
  lng = 7.815982;
  radius = 500;

  constructor(
    private service: GeoTweetService,
  ) { }

  ngOnInit() {
  }
  getRadius($event) {
    this.radius = $event;
  }

  getCoords($event) {
   this.lat = $event.lat;
   this.lng = $event.lng;
  }

  postSettings(tweetText/*, lat, lng, radiusS*/): void {
  const settings = {
    tweet: tweetText,
    latitude: this.lat,
    longitude: this.lng,
    radius: this.radius
  };
  this.service.addTweetSettings(settings as Twitter)
      .subscribe(s => {
      this.settingsTw.push(s);
    });
  }

}
