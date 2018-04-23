import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { CheckComponent } from './check/check.component';
import { RulesComponent } from './rules/rules.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'check', component: CheckComponent},
  { path: 'buy', component: BuyComponent },
  { path: 'rules', component: RulesComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
