import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';


const routes: Routes = [
  { path: 'currency-exchanger', component: HomeComponent },
  {
    path: '',
    redirectTo: 'currency-exchanger',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'currency-exchanger',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
