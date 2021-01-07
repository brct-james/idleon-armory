import { Component, OnInit } from '@angular/core';
import { Character } from '../Character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-selector',
  templateUrl: './character-selector.component.html',
  styleUrls: ['./character-selector.component.sass']
})
export class CharacterSelectorComponent implements OnInit {
  dropdown = false;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void { }

  get characters(): Character[] {
    return this.characterService.characterList;
  }

  get selectedChar(): Character {
    return this.characterService.activeChar;
  }

  onSelect(target: Character): void {
    this.characterService.setActive(target);
    this.toggleDropdown();
  }

  toggleDropdown(): void {
    this.dropdown = this.dropdown ? false : true;
  }

}
