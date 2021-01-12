import { Injectable } from '@angular/core';
import { Character } from './Character';
import { CHARACTERS } from './character-list';
import { BehaviorSubject } from 'rxjs';
import {LocalStorageService} from 'ngx-webstorage';

import isEqual from 'lodash.isequal';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  characterList: Character[];
  activeChar: Character;

  activeCharChange: BehaviorSubject<Character>;
  charListChange: BehaviorSubject<Character[]>;

  constructor(private localStorage:LocalStorageService) {
    let retrievedCharList = this.getStored("characterList");
    let retrievedActiveChar = this.getStored("activeChar");
    
    //TODO: Replaces CHARACTERS with the default new character for new users
    this.charListChange = new BehaviorSubject<Character[]>(retrievedCharList ? retrievedCharList : CHARACTERS);
    this.activeCharChange = new BehaviorSubject<Character>(retrievedActiveChar ? retrievedActiveChar : CHARACTERS[0]);

    this.charListChange.subscribe((value) => {
      this.characterList = value;
    });
    this.activeCharChange.subscribe((value) => {
      this.activeChar = value;
    });
  }

  clearStorage() {
    this.localStorage.clear();
    this.setChars(CHARACTERS);
    this.setActive(CHARACTERS[0]);
  }

  getStored(key: string): any {
    return this.localStorage.retrieve(key);
  }

  saveChangesToStorage(): void {
    this.localStorage.store("activeChar", this.activeChar);
    this.localStorage.store("characterList", this.characterList);
  }

  setChars(chars: Character[]) {
    this.charListChange.next(chars);
    this.setActive(chars[this.activeChar.id-1]);
  }

  updateCharacterProperty(targetID: Number, propertyName: string, newValue: any): void {
    let result = this.characterList.map(character => {
      if (isEqual(character.id, targetID)) {
        character[propertyName] = newValue;
      }
      return character;
    });
    this.setChars(result);
    this.saveChangesToStorage();
  }

  setActive(target: Character): void {
    this.activeCharChange.next(target);
    this.saveChangesToStorage();
  }

  addChar(target: Character): void {
    this.charListChange.next(this.characterList.concat(target));
    this.saveChangesToStorage();
  }

  delChar(target: Character): void {
    let delTarget = this.characterList.filter(char => isEqual(char, target))[0];
    let delIdx = this.characterList.indexOf(delTarget);
    this.charListChange.next(this.characterList.filter((char, index) => { console.log(char.id, index, delIdx, index >= delIdx); char.id = index >= delIdx ? char.id - 1 : char.id; return !isEqual(char, target) }));
    if (isEqual(target, this.activeChar)) {
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
    this.saveChangesToStorage();
  }
}
