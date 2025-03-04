import { effect, Injectable, signal, OnInit } from '@angular/core';
import type { Character } from '../interfaces/Character.interface';

function loadFromLocalStorage() : Character[] {
  const characters = localStorage.getItem(`Characters`);
  //FALTAN VALIDACIONES DE JSON INJECTION
  return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonBallService {
  constructor() { }

  characters = signal<Character[]>(loadFromLocalStorage());


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
