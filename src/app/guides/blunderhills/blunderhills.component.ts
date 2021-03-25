import { Component, OnInit } from '@angular/core';
import { ScrollToService } from '../../scroll-to.service';

@Component({
  selector: 'app-blunderhills-guide',
  templateUrl: './blunderhills.component.html',
  styleUrls: ['./blunderhills.component.sass']
})
export class BlunderhillsGuideComponent implements OnInit {

  constructor(public scroll: ScrollToService) { }

  ngOnInit(): void {
    this.scroll.checkInitialScroll("#guide");
  }
}
