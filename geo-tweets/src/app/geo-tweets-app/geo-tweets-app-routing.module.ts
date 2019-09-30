import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapsComponent} from './maps/maps.component';
import {AdminComponent} from './admin/admin.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  {
    path: 'admin/tweets',
    component: MapsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeoTweetsAppRoutingRoutes {}
