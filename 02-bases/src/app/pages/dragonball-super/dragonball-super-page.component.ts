import { DragonBallService } from './../../services/dragonball.service';
import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'app-dragonball-page.component',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponentComponent {
  //Old Mode
  // constructor(
  //   private dragonballService : DragonBallService
  // ) {}
  //New Mode
  private dragonballService = inject(DragonBallService);
  addCharacter(char : Character) {
    if (char != null && this.dragonballService != null) {
      this.dragonballService.addCharacter(char);
    }
  }

  getCharacters() : Character[] {
    return this.dragonballService.characters();
  }

  powerClasses = computed(() => {
      return 'text-danger';
  });

}
