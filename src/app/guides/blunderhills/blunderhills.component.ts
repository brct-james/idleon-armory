import { Component, OnInit } from '@angular/core';
import { ScrollToService } from '../../scroll-to.service';

@Component({
  selector: 'app-blunderhills',
  templateUrl: './blunderhills.component.html',
  styleUrls: ['./blunderhills.component.sass']
})
export class BlunderhillsComponent implements OnInit {

  constructor(public scroll: ScrollToService) { }

  ngOnInit(): void {
    this.scroll.checkInitialScroll("#guide");
  }
}
