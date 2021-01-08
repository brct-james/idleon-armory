import { Component, OnInit } from '@angular/core';
import { Character } from '../Character';
import { CharacterService } from '../character.service';

import isEqual from 'lodash.isequal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.sass' ]
})
export class DashboardComponent implements OnInit {
  constructor( private characterService: CharacterService ) { }

  isEqual = isEqual

  ngOnInit(): void { }

  get characters(): Character[] {
    return this.characterService.characterList;
  }

  set characters(characters: Character[]) {
    this.characterService.setChars(characters)
  }

  get activeCharacter(): Character {
    return this.characterService.activeChar;
  }

  get accountLevel(): Number {
    let res = 0;
    this.characters.forEach(char => res += char.level);
    return res;
  }

  get nextSlotReq(): Number {
    const slotRequirements = [0, 8, 30, 60, 130, 225, 330, 470, 600, 760, 950, 1100];
    return slotRequirements[this.characters.length];
  }

  clearStorage() {
    this.characterService.clearStorage();
  }

  onNameChange(target, char) { 
    this.characterService.updateCharacterProperty(char, "name", target.value);
  }

  activate(target: Character): void {
    this.characterService.setActive(target);
  }

  delete(target: Character): void {
    this.characterService.delChar(target);
  }

  addNewChar(): void {
    if (this.characters.length > 0 && this.accountLevel < this.nextSlotReq) { return; }
    let newChar: Character = {
      id: (this.characters[this.characters.length-1] ? this.characters[this.characters.length-1].id : 0) + 1,
      name: "NEW CHAR",
      level: 0,
      class: "Beginner",
      inventory: {
        unlockedSlots: 0,
        contents: []
      },
      skills: [],
      talentTabs: []
    }
    this.characterService.addChar(newChar);
    if (this.characters.length <= 1) {
      this.activate(newChar);
    }
  }

  // updateCharacterProperty(target: Character, propertyName: String, newValue: Any): void {

  // }
}