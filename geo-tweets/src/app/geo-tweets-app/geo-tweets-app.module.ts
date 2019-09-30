import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GeoTweetsAppComponent } from './geo-tweets-app.component';
import {GeoTweetsAppRoutingRoutes} from './geo-tweets-app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MapsComponent } from './maps/maps.component';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import {environment} from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GeoTweetsAppRoutingRoutes,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    })
  ],
  providers: [
    GoogleMapsAPIWrapper,
  ],
  declarations: [
      GeoTweetsAppComponent,
      AdminComponent,
      MapsComponent
   ]
})
export class GeoTweetsAppModule { }
