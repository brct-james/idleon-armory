import { Injectable } from '@angular/core';
import { Character } from './Character';
import { CHARACTERS } from './character-list';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  characterList: Character[];
  activeChar: Character;

  activeCharChange: BehaviorSubject<Character> = new BehaviorSubject<Character>(CHARACTERS[0]);
  charListChange: BehaviorSubject<Character[]> = new BehaviorSubject<Character[]>(CHARACTERS);

  constructor() {
    this.activeCharChange.subscribe((value) => {
      this.activeChar = value;
    });
    this.charListChange.subscribe((value) => {
      this.characterList = value;
    });
  }

  setChars(chars: Character[]) {
    console.log("setChars", chars)
  }

  updateCharacterProperty(target: Character, propertyName: string, newValue: any): void {
    let result = this.characterList.map(character => {
      if (character === target) {
        character[propertyName] = newValue;
      }
      return character;
    });
    this.charListChange.next(result)
  }

  setActive(target: Character): void {
    this.activeCharChange.next(target);
  }

  addChar(target: Character): void {
    this.charListChange.next(this.characterList.concat(target));
  }

  delChar(target: Character): void {
    this.charListChange.next(this.characterList.filter(char => char !== target));
    if (target === this.activeChar) {
      let newActiveChar: Character = {
        id: -1,
        name: "undefined",
        level: -1,
        class: "undefined",
        inventory: {
          unlockedSlots: -1,
          contents: []
        },
        skills: [],
        talentTabs: []
      }
      if (this.characterList.length > 0) {
        newActiveChar = this.characterList[0]
      }
      this.activeCharChange.next(newActiveChar);
    }
  }
}
