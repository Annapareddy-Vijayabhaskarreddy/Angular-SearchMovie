import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyratingsComponent } from './components/myratings/myratings.component';
import { Notfound404Component } from './components/notfound404/notfound404.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent, children:[{
      path:'notfound',component:Notfound404Component
    }]
  },
  {
    path:'rating',component:MyratingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
