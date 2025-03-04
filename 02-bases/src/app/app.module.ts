import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DragonballPageComponentComponent } from './pages/dragonball/dragonball-page.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DragonballPageComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  //HashRouter
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
