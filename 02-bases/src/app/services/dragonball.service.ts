import { effect, Injectable, signal, OnInit } from '@angular/core';
import type { Character } from '../interfaces/Character.interface';

@Injectable({providedIn: 'root'})
export class DragonBallService {
  constructor() { }

  characters = signal<Character[]>([
    { id : 1, name: 'Goku', power: 9001 },
    { id : 2, name: 'Vegeta', power: 8000 },
]);


//Cada vez que characters cambie, se lanzará el efecto
  saveToLocalStorage = effect( () => {
    console.log(`Char count ${this.characters().length}`)
    localStorage.setItem(`Characters`, JSON.stringify(this.characters()))
  })

  addCharacter(character : Character) {
    this.characters.update ((items) => {
      return[...items, character];
    })
  }

}
