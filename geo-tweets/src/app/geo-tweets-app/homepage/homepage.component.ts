import { Component, OnInit, ViewChild } from '@angular/core';
import { MapsComponent } from '../maps/maps.component';
import { Tweets } from '../twitter/tweets';
import { GeoTweetService } from '../geo-tweet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  tweets: Tweets[] = [];
  constructor(private service: GeoTweetService, private route: Router) { }


  ngOnInit() {
    this.getTweets();
  }

  getTweets(): void {
    this.service.getTweets().subscribe(tweets => {
      this.tweets = tweets;
      return this.tweets;
    });
  }

  toAdmin() {
    this.route.navigate(['/admin']);
  }
}
