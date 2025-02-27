import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import type { Character } from '../../../interfaces/Character.interface';
import { share } from 'rxjs';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent {
  addCharacter() {
    if (!this.name || !this.power()) {
      return;
    }
    let char : Character = { id : 1001, name: this.name(), power: this.power() }
    //Esto es un error si lo hacemos sin señales
    // this.characters().push(char);
    // this.characters.update(
    //   (list) => {
    //     return [...list, char];
    //   }
    // )
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

    name = signal<string>('');
    power = signal<number>(0);
    // characters = <Character[]>();
}
