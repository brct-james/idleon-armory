import { Component, OnInit } from '@angular/core';
import { Character } from '../Character';
import { CharacterService } from '../character.service';
import { Class } from '../Class';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html',
  styleUrls: ['./character-information.component.sass']
})
export class CharacterInformationComponent implements OnInit {
  constructor( private characterService: CharacterService ) { }

  ngOnInit(): void { }

  get activeCharacter(): Character {
    return this.characterService.activeChar;
  }

  get listOfClasses(): string[] {
    return ["Archer", "Beginner"];
  }

  onNameChange(target) { 
    this.characterService.updateCharacterProperty(this.activeCharacter, "name", target.value);
  }

  onLevChange(target) { 
    this.characterService.updateCharacterProperty(this.activeCharacter, "level", Number(target.value));
  }

  onClassChange(target) {
    this.characterService.updateCharacterProperty(this.activeCharacter, "class", target.value);
  }

}
