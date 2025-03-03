import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import type { Character } from '../../../interfaces/Character.interface';
import { share } from 'rxjs';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent {

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name || !this.power()) {
      return;
    }
    let char : Character = { id : Math.floor(Math.random() * 1000), name: this.name(), power: this.power() }

    this.newCharacter.emit(char);
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
