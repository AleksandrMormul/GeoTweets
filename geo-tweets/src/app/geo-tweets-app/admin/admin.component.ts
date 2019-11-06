import { Component, OnInit } from '@angular/core';
import { GeoTweetService } from '../geo-tweet.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

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
    private router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit() {
  }

  signIn() {
    const credentials = {
      login: this.signInLogin,
      password: this.signInPassword
    };
    this.service.authAdmin(credentials).subscribe((res: any) => {
      localStorage.setItem('token', res.access_token);
      this.router.navigate(['admin/tweets']);
    });

  }
}
