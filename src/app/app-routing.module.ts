import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryPageComponent } from './summary/components/summary-page/summary-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'summary',
    pathMatch: 'full'
  },
  {
    path: 'summary',
    loadChildren: () => import('./summary/summary.module').then( m => m.SummaryModule)
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.module').then( m => m.CountryModule)
  },
  {
    path: 'live',
    loadChildren: () => import('./live/live.module').then( m => m.LiveModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
