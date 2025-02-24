import { UpperCasePipe } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  imports: [ UpperCasePipe]
})
export class HeroPageComponent implements OnInit {
  public name = signal('ironMan');
  public age = signal(45);

  public heroDescription = computed(() => `${this.name()} - ${this.age()}`);
  public capitalizeName = computed(() => this.name().toUpperCase());
  constructor() { }

  ngOnInit() { }

  /**
   * changeHero
   */
  public changeHero() : void {
    this.name.set('spiderman');
      this.age.set(22);
  }
  /**
   * changeAge
   */
  public changeAge() {
      this.age.set(60);
  }
  /**
   * resetForm
   */
  public resetForm() {
    this.name.set('ironMan');
    this.age.set(45);
  }
}
