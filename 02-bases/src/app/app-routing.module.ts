import { DragonballPageComponentComponent } from './pages/dragonball/dragonball-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { CounterComponent } from './counter/components/counter/counter.component';
import { DragonballSuperPageComponentComponent } from './pages/dragonball-super/dragonball-super-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: CounterComponent,
  },
  {
  path: 'hero',
  component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponentComponent,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponentComponent,
  },
  {
    path:'**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
