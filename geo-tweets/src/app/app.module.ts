import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthGuardService} from './auth/auth-guard.service';
import {JWT_OPTIONS, JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {AuthService} from "./auth/auth.service";

export function getToken(): string {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
    config: {
      tokenGetter: getToken
    }
  })
  ],
  providers: [AuthGuardService, AuthService, AuthGuardService, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
