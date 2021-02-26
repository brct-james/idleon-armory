import { Component, OnInit } from '@angular/core';
import { ScrollToService } from '../../scroll-to.service';

@Component({
  selector: 'app-yum-yum-desert',
  templateUrl: './yum-yum-desert.component.html',
  styleUrls: ['./yum-yum-desert.component.sass']
})
export class YumYumDesertComponent implements OnInit {

  constructor(public scroll: ScrollToService) { }

  ngOnInit(): void {
    this.scroll.checkInitialScroll("#guide");
  }

}
