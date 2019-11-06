import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from './maps/maps.component';
import { AdminComponent } from './admin/admin.component';
import { TwitterComponent } from './twitter/twitter.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { RoleGuardService } from '../guards/role-guard.service';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'admin', component: AdminComponent,
  },
  {
    path: 'admin/tweets',
    component: TwitterComponent,
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeoTweetsAppRoutingRoutes {}
