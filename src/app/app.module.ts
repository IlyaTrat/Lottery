import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { BottomComponent } from './bottom/bottom.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home-window/home/home.component';
import { CheckComponent } from './check-window/check/check.component';
import { RulesComponent } from './rules/rules.component';
import { BuyComponent } from './buy-window/buy/buy.component';
import { AboutComponent } from './about/about.component';
import { ServerDataService } from './server-data.service';
import { CheckWindowComponent } from './check-window/check-window.component';
import { BuyWindowComponent } from './buy-window/buy-window.component';
import { HomeWindowComponent } from './home-window/home-window.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login-window/login/login.component';
import { LoginService } from './login.service';
import { RegistrationComponent } from './login-window/registration/registration.component';
import { LoginWindowComponent } from './login-window/login-window.component';

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
    HomeWindowComponent,
    LoginComponent,
    RegistrationComponent,
    LoginWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServerDataService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
