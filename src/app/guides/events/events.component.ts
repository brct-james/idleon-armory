import { Component, OnInit } from '@angular/core';
import { ScrollToService } from '../../scroll-to.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass']
})
export class EventsComponent implements OnInit {

  constructor(private scroll: ScrollToService) { }

  ngOnInit(): void {
    this.scroll.checkInitialScroll("#guide");
  }

}
