import { Component, OnInit } from '@angular/core';
import { ScrollToService } from '../../scroll-to.service';

@Component({
  selector: 'app-efaunt',
  templateUrl: './efaunt.component.html',
  styleUrls: ['./efaunt.component.sass']
})
export class EfauntComponent implements OnInit {

  constructor(public scroll: ScrollToService) { }

  ngOnInit(): void {
    this.scroll.checkInitialScroll("#guide");
  }

}
