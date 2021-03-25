import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class ScrollToService {
    checkInitialScroll(container: string) {
        let href = this.router.url;
        let idx = href.indexOf('#');
        if (idx > 0) {
            let id = href.substring(idx);
            this.scrollTo(id, container);
        }
    }
    scrollTo(element: string, container: string, toMid: boolean = false) {
        let x = document.querySelector(element) as HTMLElement;
        let y = document.querySelector(container) as HTMLElement;
        if (x && y) {
            this.scrollIfNeeded(x, y, toMid);
        }
    }

    scrollIfNeeded(element: HTMLElement, container: HTMLElement, toMid) {
        let offsetModifier = 100;
        if (toMid) {
            offsetModifier = container.offsetHeight / 2;
        }
        // console.log(element.offsetTop, container.scrollTop, "offsetModifier:", offsetModifier);
        if (element.offsetTop != container.scrollTop) {
            container.scrollTop = element.offsetTop - offsetModifier;
            // console.log('scroll1');
        } else {
            // console.log('scroll2');
            const offsetBottom = element.offsetTop + element.offsetHeight;
            const scrollBottom = container.scrollTop + container.offsetHeight;
            if (offsetBottom > scrollBottom) {
                // console.log('scroll3');
                container.scrollTop = offsetBottom - container.offsetHeight;
            }
        }
    }

    constructor(private router: Router) {}
}
