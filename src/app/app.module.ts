import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { BottomComponent } from './bottom/bottom.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CheckComponent } from './check/check.component';
import { RulesComponent } from './rules/rules.component';
import { BuyComponent } from './buy/buy.component';
import { AboutComponent } from './about/about.component';
import { ServerDataService } from './server-data.service';
import { CheckWindowComponent } from './check-window/check-window.component';
import { BuyWindowComponent } from './buy-window/buy-window.component';
import { HomeWindowComponent } from './home-window/home-window.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BottomComponent,
    HomeComponent,
    CheckComponent,
    RulesComponent,
    BuyComponent,
    AboutComponent,
    CheckWindowComponent,
    BuyWindowComponent,
    HomeWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
