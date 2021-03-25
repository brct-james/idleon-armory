import { Component, OnInit } from '@angular/core';
import { ScrollToService } from '../../scroll-to.service';

@Component({
  selector: 'app-yum-yum-desert-guide',
  templateUrl: './yum-yum-desert.component.html',
  styleUrls: ['./yum-yum-desert.component.sass']
})
export class YumYumDesertGuideComponent implements OnInit {

  constructor(public scroll: ScrollToService) { }

  ngOnInit(): void {
    this.scroll.checkInitialScroll("#guide");
  }

}
