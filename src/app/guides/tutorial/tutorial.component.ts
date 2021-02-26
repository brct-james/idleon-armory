import { Component, OnInit } from '@angular/core';
import { ScrollToService } from '../../scroll-to.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.sass']
})
export class TutorialComponent implements OnInit {
  guideName = 'Idleon Armory Tutorial';

  constructor(private scroll: ScrollToService) { }

  ngOnInit(): void {
    this.scroll.checkInitialScroll("#guide");
  }

}
