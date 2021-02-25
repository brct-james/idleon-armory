import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  equipment: any;
  classes: any;
  talents: any;
  talentTabs: any;

  talentsLoaded: boolean = false;
  constructor(private http: HttpClient) {
    this.getEquipment();
    this.getClasses();
    this.getTalents();
    this.getTalentTabs();
  }

  equipmentUrl = 'assets/json/equipment.json';
  classesUrl = 'assets/json/classes.json';
  talentsUrl = 'assets/json/talents.json';
  talentTabsUrl = 'assets/json/talentTabs.json';

  getEquipment() {
    this.http.get(this.equipmentUrl).subscribe((data: any) => this.equipment = data);
  }

  getClasses() {
    this.http.get(this.classesUrl).subscribe((data: any) => this.classes = data);
  }

  getTalents() {
    this.http.get(this.talentsUrl).subscribe((data: any) => {this.talents = data; this.talentsLoaded = true});
  }

  getTalentTabs() {
    this.http.get(this.talentTabsUrl).subscribe((data: any) => this.talentTabs = data);
  }
}
