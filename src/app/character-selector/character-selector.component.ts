import { Component, OnInit } from '@angular/core';
import { Character } from '../Character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-selector',
  templateUrl: './character-selector.component.html',
  styleUrls: ['./character-selector.component.sass']
})
export class CharacterSelectorComponent implements OnInit {
  characters: Character[];
  selectedChar: Character;
  dropdown = false;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
    this.selectedChar = this.characters[0];
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters);
  }

  onSelect(char: Character): void {
    this.selectedChar = char;
    this.toggleDropdown()
  }

  toggleDropdown(): void {
    this.dropdown = this.dropdown ? false : true;
  }

}
