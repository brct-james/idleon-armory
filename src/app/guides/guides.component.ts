import { Component, OnInit } from '@angular/core';

import { guides } from '../guides';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.sass']
})
export class GuidesComponent implements OnInit {
  guides = guides;

  constructor() { }

  ngOnInit(): void {
  }

  activate(target: number): void {
    guides.filter(guide => guide.id === target)[0].active = true;
  }

}
