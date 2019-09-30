import { Component, OnInit } from '@angular/core';
import { GeoTweetService } from '../geo-tweet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css'],
})
export class AdminComponent implements OnInit {
  public signInLogin: string;
  public signInPassword: string;
  public jwt: string;

  constructor(
    private service: GeoTweetService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn() {
    const credentials = {
      login: this.signInLogin,
      password: this.signInPassword
    };
    this.service.authAdmin(credentials).subscribe((res: any) => {
      this.jwt = res.token;
      this.router.navigate(['admin/tweets']);
    });

  }
}
