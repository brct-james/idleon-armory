import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollToService } from '../scroll-to.service';

import { guides } from '../guides';

@Component({
  selector: 'app-guide-selector',
  templateUrl: './guide-selector.component.html',
  styleUrls: ['./guide-selector.component.sass']
})
export class GuideSelectorComponent implements AfterViewInit {
  guides = guides;
  activeUrl = "";
  
  constructor(public scroll: ScrollToService, private route: ActivatedRoute) { }

  ngAfterViewInit(): void {
    this.route.url.subscribe(url => url.length > 0 ? this.activeUrl = url[0].path : null);
    let activeLink = guides.filter(item => item.url == this.activeUrl)[0];
    this.scroll.scrollTo("#guide-" + activeLink.id, "#sidebar", true);
  }

}
