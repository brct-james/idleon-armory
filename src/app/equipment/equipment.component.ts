import { Component, OnInit } from '@angular/core';
import { Character } from '../Character';
import { CharacterService } from '../character.service';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.sass']
})
export class EquipmentComponent implements OnInit {
  constructor( private characterService: CharacterService, private jsonService: JsonService ) { }

  ngOnInit(): void {
  }

  get activeCharacter(): Character {
    return this.characterService.activeChar;
  }

  get categories(): any {
    return this.jsonService.equipment ? this.jsonService.equipment.categories : undefined;
  }

  get items(): any {
    return this.jsonService.equipment ? this.jsonService.equipment.items : undefined;
  }

}
