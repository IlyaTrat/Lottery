import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RulesComponent } from './rules/rules.component';
import { AboutComponent } from './about/about.component';
import { HomeWindowComponent } from './home-window/home-window.component';
import { CheckWindowComponent } from './check-window/check-window.component';
import { BuyWindowComponent } from './buy-window/buy-window.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeWindowComponent },
  { path: 'check', component: CheckWindowComponent},
  { path: 'buy', component: BuyWindowComponent },
  { path: 'rules', component: RulesComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
