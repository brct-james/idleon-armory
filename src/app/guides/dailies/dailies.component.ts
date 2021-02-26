import { Component, OnInit } from '@angular/core';
import { ScrollToService } from '../../scroll-to.service';

@Component({
  selector: 'app-dailies',
  templateUrl: './dailies.component.html',
  styleUrls: ['./dailies.component.sass']
})
export class DailiesComponent implements OnInit {

  constructor(private scroll: ScrollToService) { }

  ngOnInit(): void {
    this.scroll.checkInitialScroll("#guide");
  }

}
