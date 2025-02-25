import { Component, signal } from '@angular/core';


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
  characters = signal<Character[]>([
    {
      id : 1, name: 'Goku', power: 9001
    },
    {
      id : 1, name: 'Vegeta', power: 8000
    },
    {
      id : 1, name: 'Piccolo', power: 3000
    },
]);

}
