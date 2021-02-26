import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollToService {
  checkInitialScroll(container: string) {
    let href = this.router.url;
    let idx = href.indexOf('#');
    if (idx > 0) {
      let id = href.substring(idx)
      this.scrollTo(id, container)
    }
  }
  scrollTo(element: string, container: string) {
    console.log("SCROLLING", element, container)
    let x = document.querySelector(element) as HTMLElement;
    let y = document.querySelector(container) as HTMLElement;
    if (x && y) {
      this.scrollIfNeeded(x, y);
    }
  }

  scrollIfNeeded(element: HTMLElement, container: HTMLElement) {
    if (element.offsetTop < container.scrollTop) {
      container.scrollTop = element.offsetTop;
    } else {
      const offsetBottom = element.offsetTop + element.offsetHeight;
      const scrollBottom = container.scrollTop + container.offsetHeight;
      if (offsetBottom > scrollBottom) {
        container.scrollTop = offsetBottom - container.offsetHeight;
      }
    }
  }

  constructor(private router: Router) { }

}