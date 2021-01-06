import { Injectable } from '@angular/core';
import { Character } from './Character';
import { CHARACTERS } from './character-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  getCharacters(): Observable<Character[]> {
    return of(CHARACTERS);
  }
}
