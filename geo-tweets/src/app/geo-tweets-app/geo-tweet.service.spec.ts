/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeoTweetService } from './geo-tweet.service';

describe('Service: GeoTweet', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoTweetService]
    });
  });

  it('should ...', inject([GeoTweetService], (service: GeoTweetService) => {
    expect(service).toBeTruthy();
  }));
});
