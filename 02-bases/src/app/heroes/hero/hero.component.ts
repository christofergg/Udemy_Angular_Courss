import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  public name : string = 'ironMan';
  public age: number = 45;


  get CapitalizeName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription() : string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero() : void {
    this.name = 'spiderman'
  }
  changeAge() : void {
    this.age = 25;
  }
  resetForm() {
    this.name = 'IRONMAN';
    this.age = 45;
  }
}
