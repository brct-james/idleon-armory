import { Component, OnInit } from '@angular/core';
import { Character } from '../Character';
import { CharacterService } from '../character.service';
import { Class } from '../Class';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html',
  styleUrls: ['./character-information.component.sass']
})
export class CharacterInformationComponent implements OnInit {
  constructor( private characterService: CharacterService, private jsonService: JsonService ) { }

  ngOnInit(): void { }

  get activeCharacter(): Character {
    return this.characterService.activeChar;
  }

  get listOfClasses(): string[] {
    return this.jsonService.classes ? this.jsonService.classes.filter(cls => cls.isSpoiler === false).map(cls => cls.name) : undefined;
  }

  onNameChange(target) { 
    this.characterService.updateCharacterProperty(this.activeCharacter.id, "name", target.value);
  }

  onLevChange(target) { 
    this.characterService.updateCharacterProperty(this.activeCharacter.id, "level", Number(target.value));
  }

  onClassChange(target) {
    this.characterService.updateCharacterProperty(this.activeCharacter.id, "class", target.value);
  }

}
