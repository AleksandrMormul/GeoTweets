import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from './maps/maps.component';
import { AdminComponent } from './admin/admin.component';
import { TwitterComponent } from './twitter/twitter.component';


const routes: Routes = [
  /*{ path: '', component: TwitterComponent },*/
  { path: 'admin', component: AdminComponent },
  {
    path: 'admin/tweets',
    component: TwitterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeoTweetsAppRoutingRoutes {}
