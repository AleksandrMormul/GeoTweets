import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { GeoTweetsAppComponent } from './geo-tweets-app.component';
import { GeoTweetsAppRoutingRoutes } from './geo-tweets-app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MapsComponent } from './maps/maps.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { environment } from '../../environments/environment';
import { TwitterComponent } from './twitter/twitter.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxTweetModule } from 'ngx-tweet';
import { AuthGuardService } from '../auth/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GeoTweetsAppRoutingRoutes,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    }),
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxTweetModule
  ],
  providers: [
    GoogleMapsAPIWrapper,
    [AuthGuardService],
  ],
  declarations: [
      GeoTweetsAppComponent,
      AdminComponent,
      MapsComponent,
      TwitterComponent
   ]
})
export class GeoTweetsAppModule { }
