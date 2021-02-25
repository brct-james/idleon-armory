import { Component, OnInit } from '@angular/core';
import { Character } from '../Character';
import { CharacterService } from '../character.service';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.sass']
})
export class TalentsComponent implements OnInit {
  private _activeTab: string;
  constructor( private characterService: CharacterService, private jsonService: JsonService ) { }

  ngOnInit(): void {
  }

  //TODO: move camelize to its own service or make a pipe

  //Stolen from https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case for convenience
  //modified to simultaneously remove 's and !s
  camelize(str: string) {
    return str.replace(/(?:['!])/g, "").replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }

  get activeCharacter(): Character {
    return this.characterService.activeChar;
  }

  get activeClass(): any {
    return this.jsonService.classes ? this.jsonService.classes.find(function (obj: any) { return obj.name == this.activeCharacter.class; }, this) : {talentTabNames: []};
  }

  get activeTalents(): any[] {
    let res = Array(15).fill({name: "UnknownSkill"});
    if (this.jsonService.talentsLoaded === true) {
      let activeTals = this.jsonService.talents.filter(tal => tal.parentTabs.includes(this.activeTab), this);
      res = res.map((node: any, index: number) => node = activeTals[index] ? activeTals[index] : node);
    }
    return res;
  }

  get talentTabs(): any {
    return this.jsonService.talentTabs;
  }

  get activeTab(): string {
    return this.activeClass.talentTabNames.includes(this._activeTab) ? this._activeTab : "";
  }

  set activeTab(newActive: string) {
    this._activeTab = newActive;
  }

  tTabClicked(tabName: string): void {
    this.activeTab = tabName;
  }
}
