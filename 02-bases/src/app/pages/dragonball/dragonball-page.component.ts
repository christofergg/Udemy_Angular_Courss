import { Component, computed, signal } from '@angular/core';


interface Character {
  id: number,
  name: string,
  power: number
}

@Component({
  selector: 'app-dragonball-page.component',
  standalone: false,
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponentComponent {
addCharacter() {
  if (!this.name || !this.power()) {
    return;
  }
  let char : Character = { id : this.characters.length + 1, name: this.name(), power: this.power() }
  //Esto es un error si lo hacemos sin señales
  // this.characters().push(char);
  this.characters.update(
    (list) => {
      return [...list, char];
    }
  )
  this.resetFields();
}

resetFields() {
  this.name.set('');
  this.power.set(0);
}

  name = signal<string>('');
  power = signal<number>(0);

  characters = signal<Character[]>([
    { id : 1, name: 'Goku', power: 9001 },
    { id : 2, name: 'Vegeta', power: 8000 },
    { id : 3, name: 'Piccolo', power: 3000 },
    { id : 4, name: 'Yamcha', power: 500 },
]);
  powerClasses = computed(() => {
      return 'text-danger';
  });
}
