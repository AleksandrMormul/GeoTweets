import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { environment } from '../../environments/environment';
import {Twitter} from './twitter/twitter';


@Injectable({
  providedIn: 'root'
})
export class GeoTweetService {
  apiUrl = environment.apiUrl;

  constructor(private http: ApiService) { }

  authAdmin(credentials) {
    const url = `${this.apiUrl}/auth`;
    return this.http.post(url, credentials);
  }

  addTweetSettings(settingsTweet: Twitter) {
    const url = `${this.apiUrl}/api/twitter/create`;
    return this.http.post(url, settingsTweet);
  }
}
