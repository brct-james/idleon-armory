import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  equipment: any;
  constructor(private http: HttpClient) {
    this.getEquipment();
  }

  equipmentUrl = 'assets/json/equipment.json';

  getEquipment() {
    this.http.get(this.equipmentUrl).subscribe((data: any) => this.equipment = data);
  }
}
