import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GeoTweetsAppComponent} from './geo-tweets-app.component';
import {MapsComponent} from './maps/maps.component';


const routes: Routes = [
  { path: 'admin', component: MapsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeoTweetsAppRoutingRoutes {}
