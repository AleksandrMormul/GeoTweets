import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {
  tweetText;
  tweetLt;
  tweetLg;

  constructor() { }

  ngOnInit() {
  }

  getLt($event) {
    //console.log($event);
  }


}
