import {
    Component,
    AfterViewInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollToService } from '../scroll-to.service';

import { navLinks } from '../nav-links';

@Component({
    selector: 'app-sidebar-nav',
    templateUrl: './sidebar-nav.component.html',
    styleUrls: ['./sidebar-nav.component.sass'],
})
export class SidebarNavComponent implements AfterViewInit {
    navLinks = navLinks;
    activeUrl = "";

    constructor(public scroll: ScrollToService, private route: ActivatedRoute) {}

    ngAfterViewInit() {
        this.route.url.subscribe(url => url.length > 0 ? this.activeUrl = url[0].path : null);
        let activeLink = navLinks.filter(item => item.url == this.activeUrl)[0];
        this.scroll.scrollTo("#navLink-" + activeLink.id, "#sidebar", true);
    }
}
