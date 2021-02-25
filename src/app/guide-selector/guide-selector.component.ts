import { Component, OnInit } from '@angular/core';

import { guides } from '../guides';

@Component({
  selector: 'app-guide-selector',
  templateUrl: './guide-selector.component.html',
  styleUrls: ['./guide-selector.component.sass']
})
export class GuideSelectorComponent implements OnInit {
  guides = guides;
  
  constructor() { }

  ngOnInit(): void {
  }

}
