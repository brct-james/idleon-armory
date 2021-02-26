import { Component, OnInit } from '@angular/core';
import { ScrollToService } from '../../scroll-to.service';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.sass']
})
export class NewPlayerComponent implements OnInit {

  constructor(private scroll: ScrollToService) { }

  ngOnInit(): void {
    this.scroll.checkInitialScroll("#guide");
  }

}
