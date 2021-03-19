import { Component, OnInit } from '@angular/core';

import { navLinks } from '../nav-links';

@Component({
    selector: 'app-sidebar-nav',
    templateUrl: './sidebar-nav.component.html',
    styleUrls: ['./sidebar-nav.component.sass'],
})
export class SidebarNavComponent implements OnInit {
    navLinks = navLinks;

    constructor() {}

    ngOnInit(): void {}
}
